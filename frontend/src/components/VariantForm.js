import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Loader from "./Loader";


const VariantForm = (props) => {
    const { colors, color, sizesArray, updateVariants, variant } = props;

    const [sizes, setSizes] = useState({});
    const [images, setImages] = useState({});
    const [uploading, setUploading] = useState(false);
    const [variantFilled, setVariantFilled] = useState(false);

    const objectsEqual = (o1, o2) =>
        Object.keys(o1).length === Object.keys(o2).length
        && Object.keys(o1).every(p => o1[p] === o2[p]);

    useEffect(() => {
        if (variant && !variantFilled) {
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
                updateVariants(sizes, images, selectedColor);
            }
            setVariantFilled(true);
        } else {
            updateVariants(sizes, images, selectedColor);
        }
    }, [images, sizes]);

    const selectedColor = colors.find(c => c._id === color);

    const handleStock = (e) => {
        let newstock = { ...sizes };
        newstock[e.target.id] = e.target.value;
        setSizes(newstock);
    }

    const handleImages = (e) => {
        let newImage = { ...images };
        const img = e.target.id.split('-')[1];
        newImage[img] = e.target.value;
        setImages(newImage);
    }

    const uploadFileHandler = async (e, imageType) => {
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

            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };


    return (
        <>
            <hr className="mt-5" />
            <Form.Group className='align-items-center'>
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
                    onChange={(e) => uploadFileHandler(e, "image1")}
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
        </>
    )
}

export default VariantForm;
