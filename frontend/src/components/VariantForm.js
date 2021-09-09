import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loader from "./Loader";


const VariantForm = (props) => {
    const { colors, color, sizesArray, updateVariants, variant, removeVariant, variants, variantFill } = props;

    const [sizes, setSizes] = useState(variant.sizes ? variant.sizes : {});
    const [images, setImages] = useState(variant.images ? variant.images : {});
    const [uploading, setUploading] = useState(false);
    const [variantFilled, setVariantFilled] = useState(variantFill ? variantFill : false);

    const objectsEqual = (o1, o2) =>
        Object.keys(o1).length === Object.keys(o2).length
        && Object.keys(o1).every(p => o1[p] === o2[p]);

    useEffect(() => {
        console.log(variants)
        const foundVariant = variants.find(x => x.color === variant.color);
        if ((variant && !variantFilled) || !foundVariant) {
            let variantSizes = {}
            for (let i in variant.sizes) {
                let sizeFound = sizesArray.find(s => s._id === variant.sizes[i].size);
                if (sizeFound) {
                    variantSizes[sizeFound.name] = variant.sizes[i].stock;
                }
            }
            let variantImages = {};
            for (let i = 0; i < variant.images.length; i++) {
                variantImages[`image${i + 1}`] = variant.images[i];
            }
            if (!objectsEqual(sizes, variantSizes) || !objectsEqual(images, variantImages)) {
                setSizes(variantSizes);
                setImages(variantImages);
            } else {
                updateVariants(sizes, images, selectedColor, variants);
            }
            setVariantFilled(true);
        } else {
            let variantSizes = {}
            for (let i in variant.sizes) {
                let sizeFound = sizesArray.find(s => s._id === variant.sizes[i].size);
                if (sizeFound) {
                    variantSizes[sizeFound.name] = variant.sizes[i].stock;
                }
            }
            const sizesNotFound = sizesArray.filter(x => Object.keys(variantSizes).indexOf(x.name) === -1);
            for (let i in sizesNotFound) {
                variantSizes[sizesNotFound[i].name] = 0;
            }

            let variantImages = {};
            for (let i = 0; i < variant.images.length; i++) {
                variantImages[`image${i + 1}`] = variant.images[i];
            }
            for (let i = variant.images.length; i < 5; i++) {
                variantImages[`image${i + 1}`] = '';
            }
            setSizes(variantSizes);
            setImages(variantImages);
        }
    }, [variant]);

    const selectedColor = colors.find(c => c._id === color);

    const handleStock = (e) => {
        let newstock = { ...sizes };
        newstock[e.target.id] = e.target.value;
        setSizes(newstock);
        sizes[e.target.id] = e.target.value
        updateVariants(sizes, images, selectedColor, variants);
    }

    const handleImages = (e) => {
        let newImage = { ...images };
        let img = e.target.id.split('-')[1];
        if (!img) {
            img = 'image' + [Object.keys(newImage).length + 1];
        }
        newImage[img] = e.target.value;
        setImages(newImage);
        images[img] = e.target.value;
        updateVariants(sizes, images, selectedColor, variants);
    }

    const uploadFileHandler = async (e, imageType, id) => {
        const file = e.target.files[0];
        console.log(file);
        const formData = new FormData();
        const fileName = selectedColor.color + ' ' + imageType;
        formData.append('image', file);
        setUploading(true);
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const { data } = await axios.post(`/api/upload/`, formData, config);

            let newImage = { ...images };
            newImage[imageType] = data;
            setImages(newImage);
            const el = {
                target: {
                    id: id ? id : e.target.parentElement.parentElement.children[1].id,
                    value: data
                }
            }
            handleImages(el);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const deleteVariant = () => {
        removeVariant([...variants.filter(v => v.color !== selectedColor._id)]);
    }


    return (
        <div id={`variant-${selectedColor ? selectedColor.name : ''}`}>
            <hr className="mt-5" />
            <Form.Group className='align-items-around p-relative'>
                <div
                    style={{
                        backgroundColor: selectedColor ? selectedColor.color : '',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        marginRight: '10px',
                        display: 'inline-block',
                    }}
                >
                </div>
                <span>
                    {selectedColor ? selectedColor.name : ''}
                </span>
                <div
                    style={{ position: 'absolute', right: '0', top: '0', cursor: 'pointer' }}
                    onClick={deleteVariant}
                >
                    <i className="fas fa-trash"></i>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Stock</Form.Label>
                {
                    sizesArray && sizesArray.map((s) => (
                        <>
                            <Form.Control
                                type="number"
                                placeholder={s.name}
                                value={sizes[s.name]}
                                min={0}
                                key={s._id}
                                id={s.name}
                                onChange={handleStock}
                            ></Form.Control>
                        </>
                    ))
                }
            </Form.Group>
            <Form.Label>Imagenes</Form.Label>
            <Form.Group>
                {uploading && <Loader />}
                <Form.Control
                    type="text"
                    placeholder="Ingrese Url de la imagen"
                    value={images.image1}
                    onChange={handleImages}
                    id={selectedColor ? `${selectedColor.color}-image1` : ''}
                ></Form.Control>
                <Form.File
                    id="image-file1"
                    label="Elegir Imagen"
                    custom
                    name="image"
                    onChange={(e) => uploadFileHandler(e, "image1", selectedColor ? `${selectedColor.color}-image1` : '')}
                ></Form.File>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Url de la imagen"
                    value={images.image2}
                    onChange={handleImages}
                    id={selectedColor ? `${selectedColor.color}-image2` : ''}
                ></Form.Control>
                <Form.File
                    id="image-file2"
                    label="Elegir Imagen"
                    name="image"
                    custom
                    onChange={(e) => uploadFileHandler(e, "image2")}
                ></Form.File>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Url de la imagen"
                    value={images.image3}
                    onChange={handleImages}
                    id={selectedColor ? `${selectedColor.color}-image3` : ''}
                ></Form.Control>
                <Form.File
                    id="image-file3"
                    label="Elegir Imagen"
                    custom
                    name="image"
                    onChange={(e) => uploadFileHandler(e, "image3")}
                ></Form.File>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Url de la imagen"
                    value={images.image4}
                    onChange={handleImages}
                    id={selectedColor ? `${selectedColor.color}-image4` : ''}
                ></Form.Control>
                <Form.File
                    id="image-file4"
                    label="Elegir Imagen"
                    custom
                    name="image"
                    onChange={(e) => uploadFileHandler(e, "image4")}
                ></Form.File>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Url de la imagen"
                    value={images.image5}
                    onChange={handleImages}
                    id={selectedColor ? `${selectedColor.color}-image5  ` : ''}
                ></Form.Control>
                <Form.File
                    id="image-file5"
                    label="Elegir Imagen"
                    custom
                    name="image"
                    onChange={(e) => uploadFileHandler(e, "image5")}
                ></Form.File>
            </Form.Group>
            <hr />
        </div>
    )
}

export default VariantForm;
