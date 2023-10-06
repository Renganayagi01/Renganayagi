import React from 'react';

import Helmet from "../components/Helmet/Helmet.js"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from '../assets/fake-data/Images/hero.png'
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";


import Category from '../components/UI/category/Category.jsx';

import '../styles/home.css';

import featureImg01 from '../assets/fake-data/Images/service-01.png';
import featureImg02 from '../assets/fake-data/Images/service-02.png';
import featureImg03 from '../assets/fake-data/Images/service-03.png';

import products from '../assets/fake-data/products.js';

import foodCategoryImg01 from '../assets/fake-data/Images/hamburger.png';
import foodCategoryImg02 from '../assets/fake-data/Images/pizza.png';
import foodCategoryImg03 from '../assets/fake-data/Images/bread.png';

import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from '../assets/fake-data/Images/location.png';

import networkImg from '../assets/fake-data/Images/network.png';

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

import { Button } from 'reactstrap';
import { useState } from "react"
import { useEffect } from "react"


const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {

  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])


  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products)
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(item => item.category === 'Burger')
      setAllProducts(filteredProducts)
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(item => item.category === 'Pizza')
      setAllProducts(filteredProducts)
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(item => item.category === 'Bread')
      setAllProducts(filteredProducts)
    }


  }, [category])


  return (
    <Helmet title="Home">
      <section>
        <div>
          <Header/>
        </div>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content" >
                <h5 className="mb-3 font-bold">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Hunger can strike at any time-let us handle it with our food delivery-“Skip the line, order online!”
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4 ">
                  <Button className='order-btn d-flex align-items-center justify-content-between'> Order Now  <i class="ri-arrow-right-s-line"></i></Button>
                  <Button className="all__foods-btn bg-white ml-10">
                    <Link to="/foods">See all food</Link>
                  </Button>
                </div>

                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'><span className="hero__img">
                    <i class="ri-car-line"></i></span>No Shipping Charge</p>
                  <p className='d-flex align-items-center gap-2'><span className="hero__img"><i class="ri-shield-check-line"></i>
                  </span>100% Secure Checkout</p>


                </div>
              </div>
            </Col>

            <Col lg='6'>
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className='w-100 md:m-auto' />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4 font'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>
                We will<span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {
              featureData.map((item, index) => (
                <Col lg='4' md='4' sm='6' xs='6' key={index} className='mt-5'>
                  <div className="feature__item text-center centre">
                    <div className='justify-center items-center text-center'>
                      <img src={item.imgUrl} alt='feature__img' className='w-25 mb-3 m-auto' />
                    </div>
                    <h5 className='fw-bold text-lg'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }



          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center ">
              <h2 className='mt-8'>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className="food__category d-flex align-item-center justify-content-center gap-4 p-2 m-5">
                <Button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('ALL')}>
                  All
                </Button>
                <Button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('BURGER')}><img src={foodCategoryImg01} alt="" />
                  Burger
                </Button>
                <Button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('PIZZA')}> <img src={foodCategoryImg02} alt="" />
                  Pizza
                </Button>
                <Button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('BREAD')}><img src={foodCategoryImg03} alt="" />
                  Bread
                </Button>
              </div>
            </Col>

            {
              allProducts.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>

                  <ProductCard item={item} />
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-tasty-treat' className='w-100' />
            </Col>

            <Col lg='6' md='6'>
              <div className="why__tasty-treat mt-12">
                <h2 className='tasty__treat-title mb-4 pb-2'>Why <span>Tasty Treat?</span></h2>
                <p className='tasty__treat-desc'>The best food websites introduce not only your restaurants location and menu,
                  but the face behind the food, too your story and staff, as well as your inspiration and influences.
                  Good food websites invite your users to go beyond the cuisine and the contact details,
                  and showcase the culture behind the cooking.</p>

                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title  d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Fresh and Tasty Foods</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Quality Support</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Order from any location {" "}</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map(item => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>

            <Col lg='6' md='6'>
              <div className='testimonial mb-4'>
                <h5 className='testimonial__subtitle font-semibold text-2xl mt-10 mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-4'>what our <span>customers</span> are saying</h2>
                <p className='testimonial__desc'>Amazing! A must! This casual dining restaurant has something for everyone! I had the mushroom risotto with scallops:
                  the dish was to die for! It was a generous portion, served piping hot, creamy and with large scallops.
                  Our wonderful server, Jess, brought us dinner rolls to eat while we waited for our meal.
                  Don’t say I didn’t warn you, the rolls are doughy warm goodness; save room for dinner! Thanks for a wonderful meal!</p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Footer/>
      </div>

    </Helmet>
  );
}

export default Home 