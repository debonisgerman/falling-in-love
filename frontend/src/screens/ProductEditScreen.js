import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import VariantForm from "../components/VariantForm";
import Meta from "../components/Meta";
import { listProductsDetails, updateProduct } from "../actions/productActions";
import { listCategories } from "../actions/categoryActions";
import { listMaterials } from "../actions/materialActions";
import { listSections } from "../actions/sectionActions";
import { listColors } from "../actions/colorActions";
import { listSizes } from "../actions/sizeActions";

import {
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
} from "../constants/productConstants";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [related, setRelated] = useState([]);
  const [material, setMaterial] = useState([]);
  const [section, setSection] = useState([]);
  const [code, setCode] = useState("");
  const [leading, setLeading] = useState(false);
  const [published, setPublished] = useState(false);
  const [price, setPrice] = useState(0);
  const [variants, setVariants] = useState([]);
  const [colorSelect, setColorSelect] = useState("");
  const [variantForm, setVariantForm] = useState("");
  const [auxVariant, setAuxVariant] = useState([]);

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loadingCategories, errorCategories, categories } = categoryList;

  const materialList = useSelector((state) => state.materialList);
  const { loadingMaterials, errorMaterials, materials } = materialList;

  const sectionList = useSelector((state) => state.sectionList);
  const { loadingSections, errorSections, sections } = sectionList;

  const colorList = useSelector((state) => state.colorList);
  const { loadingColors, errorColors, colors } = colorList;

  const sizeList = useSelector((state) => state.sizeList);
  const { loadingSizes, errorSizes, sizes } = sizeList;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    dispatch(listCategories());
    dispatch(listMaterials());
    dispatch(listSections());
    dispatch(listColors());
    dispatch(listSizes());
    if (successUpdate)
    {
      dispatch(listCategories());
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch({ type: PRODUCT_DETAILS_RESET });
      history.push("/admin/productlist");
    } else
    {
      if (!product || !product.name || product._id !== productId)
      {
        dispatch(listProductsDetails(productId));
      } else
      {
        setName(product.name);
        setDescription(product.description);
        // setCategory(product.category ? product.category._id : "");
        setCategory(product.category ? product.category.reduce((accumulator, currentValue) => {
          accumulator = accumulator || [];
          accumulator.push(currentValue._id);
          return accumulator
        }, []) : []);
        setRelated(product.related ? product.related.reduce((accumulator, currentValue) => {
          accumulator = accumulator || [];
          accumulator.push(currentValue._id);
          return accumulator
        }, []) : []);
        setMaterial(product.material ? product.material.reduce((accumulator, currentValue) => {
          accumulator = accumulator || [];
          accumulator.push(currentValue._id);
          return accumulator
        }, []) : []);
        setSection(product.section ? product.section.reduce((accumulator, currentValue) => {
          accumulator = accumulator || [];
          accumulator.push(currentValue._id);
          return accumulator
        }, []) : []);
        setCode(product.code);
        setLeading(product.leading);
        setPrice(product.price ? product.price : 0);
        setPublished(product.published ? product.published : false);
        // ver como setear los valores, color tiene que ser el id y mismo los sizes
        if (product.variants)
        {
          let aux = [];
          for (let i in product.variants)
          {
            const imagesAux = product.variants[i].images;
            const colorAux = product.variants[i].color._id;
            let sizesAux = [];
            for (let j in product.variants[i].sizes)
            {
              sizesAux.push({
                size: product.variants[i].sizes[j].size._id,
                stock: product.variants[i].sizes[j].stock,
              })
            }
            aux.push({
              images: imagesAux,
              color: colorAux,
              sizes: sizesAux,
            })
          }
          setVariants(aux);
          setAuxVariant(aux);
          updateVariantForm(aux);
        }
      }
    }
  }, [product, dispatch, productId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        description,
        category,
        material,
        section,
        code,
        leading,
        published,
        price,
        variants,
        related,
      })
    );
  };

  const onSectionChange = (e) => {
    let newSections = [...section];
    if (e.target.checked)
    {
      newSections.push(e.target.id);
    } else
    {
      const value = e.target.id;
      newSections = newSections.filter(x => x !== value);
    }
    setSection(newSections);
  }

  const onMaterialChange = (e) => {
    let newMaterials = [...material];
    if (e.target.checked)
    {
      newMaterials.push(e.target.id);
    } else
    {
      const value = e.target.id;
      newMaterials = newMaterials.filter(x => x !== value);
    }
    setMaterial(newMaterials);
  }

  const onCategoryChange = (e) => {
    let newCategories = [...category];
    if (e.target.checked)
    {
      newCategories.push(e.target.id);
    } else
    {
      const value = e.target.id;
      newCategories = newCategories.filter(x => x !== value);
    }
    setCategory(newCategories);
  }

  const onRelatedChange = (e) => {
    let newRelateds = [...related];
    if (e.target.checked)
    {
      newRelateds.push(e.target.id);
    } else
    {
      const value = e.target.id;
      newRelateds = newRelateds.filter(x => x !== value);
    }
    setRelated(newRelateds);
  }

  const updateVariantForm = (newVariants) => {

    if (newVariants)
    {
      setVariantForm(colors.length > 0 && sizes.length > 0 && newVariants.map((v, i) => (
        <>
          {<VariantForm
            color={v.color}
            colors={colors}
            sizesArray={sizes}
            key={i}
            variant={v}
            updateVariants={handleVariantsUpdate}
            removeVariant={handleRemoveVariant}
            variants={newVariants}
          />}
        </>
      )))
    } else
    {

      setVariantForm(colors.length > 0 && sizes.length > 0 && variants.length > 0 && variants.map((v, i) => (
        <>
          {<VariantForm
            color={v.color}
            colors={colors}
            sizesArray={sizes}
            key={i}
            variant={v}
            updateVariants={handleVariantsUpdate}
            removeVariant={handleRemoveVariant}
            variants={variants}
          />}
        </>
      )))
    }
  }

  const handleVariants = (e) => {
    let newVariants = [...variants];
    newVariants.push({ color: colorSelect, images: [], sizes: [] });
    setVariants(newVariants);
    setColorSelect("");
    updateVariantForm(newVariants);
  }

  const handleVariantsUpdate = (sizesV, images, color, updatedVariants) => {
    console.log(sizesV, images, color);
    if (color)
    {
      let newVariants = [...updatedVariants];
      const otherVariants = newVariants.filter(v => v.color !== color._id);
      const variantIndex = newVariants.findIndex(v => v.color === color._id)
      newVariants = newVariants.filter(v => v.color === color._id);
      if (newVariants.length > 0)
      {
        newVariants = newVariants[0];

        let imgs = [];
        Object.keys(images).forEach(i => imgs.push(images[i]));
        newVariants.images = imgs;

        let newSizes = [];
        for (let s in sizesV)
        {
          let foundSize = sizes.find(x => x.name === s);
          newSizes.push({
            size: foundSize._id,
            stock: sizesV[s],
          });
        }
        newVariants.sizes = newSizes;
        const newArray = [...otherVariants];
        newArray.splice(variantIndex, 0, newVariants);
        setVariants([...newArray]);
        updateVariantForm([...newArray]);
      } else
      {
        console.log("Something went wrong ", newVariants);
      }
    }
  }

  const handleRemoveVariant = (newVariants) => {
    setVariants([...newVariants]);
    updateVariantForm([...newVariants])
  }


  return (
    <Container>
      <Meta />
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Volver
      </Link>
      <FormContainer>
        <h1>Editar Producto</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                value={price}
                min={0.00}
                step={0.01}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* <Form.Group controlId="category">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={e => {
                  setCategory(e.target.value);
                }}
              >
                <option value={null}>- Elegir</option>
                {loadingCategories ? (
                  <Loader />
                ) : errorCategories ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  categories && categories.map((c) => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  ))
                )}
              </Form.Control>
            </Form.Group> */}

            <Form.Group controlId="category">
              <Form.Label>Categoría</Form.Label>
              <div key={`category`} className="mb-3">
                {loadingCategories ? (
                  <Loader />
                ) : errorCategories ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  categories && categories.map((c) => (
                    <Form.Check
                      key={c._id}
                      checked={category.indexOf(c._id) !== -1}
                      onChange={onCategoryChange}
                      custom
                      inline
                      value={c._id}
                      name={c.name}
                      label={c.name}
                      type='checkbox'
                      id={c._id}
                    />
                  ))
                )}
              </div>
            </Form.Group>

            <Form.Group controlId="related">
              <Form.Label>Relacionado</Form.Label>
              <div key={`related`} className="mb-3">
                {loadingCategories ? (
                  <Loader />
                ) : errorCategories ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  categories && categories.map((c) => (
                    <Form.Check
                      key={c._id}
                      checked={related.indexOf(c._id) !== -1}
                      onChange={onRelatedChange}
                      custom
                      inline
                      value={c._id}
                      name={c.name}
                      label={c.name}
                      type='checkbox'
                      id={c._id}
                    />
                  ))
                )}
              </div>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="material">
              <Form.Label>Material</Form.Label>
              <div key={`material`} className="mb-3">
                {loadingMaterials ? (
                  <Loader />
                ) : errorMaterials ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  materials && materials.map((m) => (
                    <Form.Check
                      key={m._id}
                      checked={material.indexOf(m._id) !== -1}
                      onChange={onMaterialChange}
                      custom
                      inline
                      value={m._id}
                      name={m.name}
                      label={m.name}
                      type='checkbox'
                      id={m._id}
                    />
                  ))
                )}
              </div>
            </Form.Group>

            <Form.Group controlId="section">
              <Form.Label>Sección</Form.Label>
              <div key={`section`} className="mb-3">
                {loadingSections ? (
                  <Loader />
                ) : errorSections ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  sections && sections.map((s) => (
                    <Form.Check
                      key={s._id}
                      checked={section.indexOf(s._id) !== -1}
                      onChange={onSectionChange}
                      custom
                      inline
                      value={s._id}
                      name={s.name}
                      label={s.name}
                      type='checkbox'
                      id={s._id}
                    />
                  ))
                )}
              </div>
            </Form.Group>

            <Form.Group controlId="code">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                placeholder="Código"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="colorSelect">
              <Form.Label>Color</Form.Label>
              <Row>
                <Col md={10}>
                  <Form.Control
                    as="select"
                    value={colorSelect}
                    onChange={e => {
                      setColorSelect(e.target.value);
                    }}
                  >
                    <option value={null}>- Elegir</option>
                    {loadingColors ? (
                      <Loader />
                    ) : errorColors ? (
                      <Message variant="danger">{error}</Message>
                    ) : (
                      colors && colors.filter(
                        function (e) {
                          console.log(this); return this && this.map(function (x) { return x.color; }).indexOf(e._id) < 0;
                        },
                        variants
                      ).map((c) => (
                        <option
                          key={c._id}
                          value={c._id}
                          id={c._id}
                        >
                          {c.name}
                        </option>
                      ))
                    )}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    disabled={variants && variants.length >= colors.length || !colorSelect}
                    onClick={handleVariants}
                    variant="primary"
                  >
                    Agregar
                  </Button>
                </Col>
              </Row>
            </Form.Group>
            {
              variantForm
            }

            <Form.Group controlId="leading">
              <Form.Check
                type="checkbox"
                label="Producto Destacado"
                checked={leading}
                onChange={(e) => setLeading(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Form.Group controlId="published">
              <Form.Check
                type="checkbox"
                label="Publicar"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Actualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container >
  );
};

export default ProductEditScreen;
