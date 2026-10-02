import { useSelector } from "react-redux";
import { AppBar, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import './Homepage.css';
import Logo from "/src/assets/logo.png";
import FullPageLoader from '../FullPageLoader';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image3 from '/src/assets/banking3.jpg';
import image8 from '/src/assets/banking8.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import HamburgerMenu from '../HamburgerMenu';
import { FaAngleLeft, FaAngleRight, FaHandPointer } from "react-icons/fa";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LockIcon from '@mui/icons-material/Lock';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import freelancer from "/src/assets/freelancer.jpg";
import shopping from "/src/assets/onlineShopping.jpg";
import seller from "/src/assets/onlineSellers.jpg";
import affiliateMarketing from "/src/assets/affiliateMarketing.jpg";
import { FaShareSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import appStore from "/src/assets/app-store.png";
import googlePlay from "/src/assets/google-play-store.png";
import { FaFacebookF } from "react-icons/fa";
import { Google, Twitter } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';
import ScrollToTopButton from '../ScrollToTopButton';
import VideoSection from './VideoSection';
import { ImCheckmark } from "react-icons/im";
import TestimonialSection from './TestimonialSection';


const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user?.userDetails);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div id="homepage">
      <AppBar id="homepage-header" position="sticky">
        <Toolbar id="homepage-header-toolbar" style={{ display: "flex", flexDirection: "row" }}>
          <div id="homepage-logo-container" className="logo-container">
            <Link id="homepage-logo-link" to="/">
              <img id="homepage-logo" src={Logo} style={{ width: "7rem", cursor: "pointer" }} alt="NairaNest Logo" />
            </Link>
          </div>

          <div id="homepage-desktop-nav" className="desktop-nav">
            <NavLink id="homepage-nav-about" to="/" className="nav-link">About</NavLink>
            <NavLink id="homepage-nav-services" to="/services" className="nav-link">Services</NavLink>
            <NavLink id="homepage-nav-client" to="/client" className="nav-link">Client</NavLink>
            <NavLink id="homepage-nav-contact" to="/contact" className="nav-link">Contact Us</NavLink>
            {user ? (
              <NavLink id="homepage-nav-dashboard" to="/dashboard/user" className="nav-link">Dashboard</NavLink>
            ) : (
              <>
                <NavLink id="homepage-nav-signup" to="/signup" className="nav-link">Sign Up</NavLink>
                <NavLink id="homepage-nav-login" to="/login" className="nav-link">Log In</NavLink>
              </>
            )}
          </div>

          <div id="homepage-mobile-nav" className="mobile-nav">
            <HamburgerMenu user={user} /> 
          </div>
        </Toolbar>
      </AppBar>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-dots'
        }}
        navigation={{
          nextEl: '.next-slide',
          prevEl: '.prev-slide',
        }}
        id="homepage-hero-carousel"
        className="myFirstSwiper"
      >
        <SwiperSlide id="homepage-hero-slide-payments">
          <div id="homepage-hero-slide-payments-content" className="slide-container">
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              src={image3}
              alt="Slide 1"
              id="homepage-hero-image-payments"
              style=
              {{
                objectFit: "cover"
              }}
            />
            <div id="homepage-hero-overlay-payments" className="overlay"></div>
            <div id="homepage-hero-caption-payments" className="caption">
              <h2 id="homepage-hero-title-payments">Send & Receive Money</h2>
              <p id="homepage-hero-description-payments">Quickly and easily send, receive and request money online with NairaNest. Over 180 countries and 120 currencies supported.</p>
              <div id="homepage-hero-actions-payments" className="slide-btn-container">
                <div id="homepage-hero-signup-wrapper-payments" className='slide-btn1-wrapper'>
                  <Link id="homepage-hero-signup-link-payments" to="/signup"><button id="homepage-hero-signup-button-payments" className='slide-btn1'>Open a free account</button></Link>
                </div>
                <div id="homepage-hero-how-it-works-wrapper-payments" className='slide-btn2-wrapper' style={{ position: "relative" }}>
                  <PlayArrowIcon id="homepage-hero-how-it-works-icon" style={{ position: "absolute", top: "0", margin: "12px 0 0 7px" }} />
                  <button id="homepage-hero-how-it-works-button-payments" className='slide-btn2'> See how it works</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="homepage-hero-slide-businesses">
          <div id="homepage-hero-slide-businesses-content" className="slide-container">
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              src={image8}
              alt="Slide 3"
              id="homepage-hero-image-businesses"
              style=
              {{
                objectFit: "cover"
              }}
            />
            <div id="homepage-hero-overlay-businesses" className="overlay"></div>
            <div id="homepage-hero-caption-businesses" className="caption">
              <h2 id="homepage-hero-title-businesses">Trusted by more than 50,000 businesses worldwide.</h2>
              <p id="homepage-hero-description-businesses">Over 180 countries and 120 currencies supported.</p>
              <div id="homepage-hero-actions-businesses" className="slide-btn-container">
                <div id="homepage-hero-signup-wrapper-businesses" className='slide-btn1-wrapper'>
                  <Link id="homepage-hero-signup-link-businesses" to="/signup"><button id="homepage-hero-signup-button-businesses" className='slide-btn1'>Get started for free</button></Link>
                </div>
                <div id="homepage-hero-learn-more-wrapper" className='slide-btn3-wrapper' style={{ position: "relative" }}>
                  <PlayCircleIcon id="homepage-hero-learn-more-icon" style={{ position: "absolute", top: "0", margin: "12px 0 0 20px" }} />
                  <button id="homepage-hero-learn-more-button" className='slide-btn3'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <span id="homepage-hero-previous" className="prev-slide"><FaAngleLeft id="homepage-hero-previous-icon" style={{ fontSize: "1.4rem" }} /></span>
        <span id="homepage-hero-next" className="next-slide"><FaAngleRight id="homepage-hero-next-icon" style={{ fontSize: "1.4rem" }} /></span>
      </Swiper>
      <div id="homepage-hero-pagination" className="swiper-dots"></div>

      <section id="homepage-why-choose-us" className="why-choose-us">
        <div id="homepage-why-choose-us-intro" style={{ padding: "3.5rem .5rem 3.5rem .5rem" }}>
          <h1 id="homepage-why-choose-us-title" style={{ fontSize: "2rem", textAlign: "center", marginBottom: ".7rem", fontWeight: "500" }}>Why should you choose NairaNest?</h1>
          <p id="homepage-why-choose-us-description" style={{ lineHeight: "30px", fontSize: "1.2rem", textAlign: "center", fontWeight: "300", letterSpacing: ".2px", color: "#646765" }}>Here&#39;s Top 4 reasons why you need a NairaNest account to manage your money.</p>
        </div>

        <div id="homepage-reasons-list" className="reasons-container">
          <div id="homepage-reason-easy-to-use" className="reason-card">
            <div id="homepage-reason-easy-to-use-icon-container" style={{ margin: "0 0 1rem" }}>
              <FaHandPointer id="homepage-reason-easy-to-use-icon" style={{ color: "#1976d2", fontSize: "2.8rem" }} />
            </div>
            <h1 id="homepage-reason-easy-to-use-title" style={{ fontWeight: "500", marginBottom: ".8rem" }}>Easy to use</h1>
            <p id="homepage-reason-easy-to-use-description" style={{ marginBottom: "1rem", color: "#646765" }}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
            <a id="homepage-reason-easy-to-use-link" style={{ color: "#1976d2" }}>Learn more &gt; </a>
          </div>

          <div id="homepage-reason-faster-payments" className="reason-card">
            <div id="homepage-reason-faster-payments-icon-container" style={{ margin: "0 0 1rem" }}>
              <RocketLaunchIcon id="homepage-reason-faster-payments-icon" style={{ color: "#1976d2", fontSize: "2.8rem" }} />
            </div>
            <h1 id="homepage-reason-faster-payments-title" style={{ fontWeight: "500", marginBottom: ".8rem" }}>Faster Payments</h1>
            <p id="homepage-reason-faster-payments-description" style={{ marginBottom: "1rem", color: "#646765" }}>Persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
            <a id="homepage-reason-faster-payments-link" style={{ color: "#1976d2" }}>Learn more &gt; </a>
          </div>

          <div id="homepage-reason-lower-fees" className="reason-card">
            <div id="homepage-reason-lower-fees-icon-container" style={{ margin: "0 0 1rem" }}>
              <AttachMoneyIcon id="homepage-reason-lower-fees-icon" style={{ color: "#1976d2", fontSize: "2.8rem" }} />
            </div>
            <h1 id="homepage-reason-lower-fees-title" style={{ fontWeight: "500", marginBottom: ".8rem" }}>Lower Fees</h1>
            <p id="homepage-reason-lower-fees-description" style={{ marginBottom: "1rem", color: "#646765" }}>Essent lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
            <a id="homepage-reason-lower-fees-link" style={{ color: "#1976d2" }}>Learn more &gt; </a>
          </div>

          <div id="homepage-reason-security" className="reason-card">
            <div id="homepage-reason-security-icon-container" style={{ margin: "0 0 1rem" }}>
              <LockIcon id="homepage-reason-security-icon" style={{ color: "#1976d2", fontSize: "2.8rem" }} />
            </div>
            <h1 id="homepage-reason-security-title" style={{ fontWeight: "500", marginBottom: ".8rem" }}>100% secure</h1>
            <p id="homepage-reason-security-description" style={{ marginBottom: "1rem", color: "#646765" }}>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
            <a id="homepage-reason-security-link" style={{ color: "#1976d2" }}>Learn more &gt; </a>
          </div>
        </div>
      </section>


      <section id="homepage-payment-solutions" style={{ backgroundColor: "#f1f5f6", margin: "3.5rem 0 3.5rem", padding: "3.5rem 1rem 0 1rem" }} className="payment-solutions">
        <div id="homepage-payment-solutions-intro" className="ps-header">
          <h1 id="homepage-payment-solutions-title" style={{ fontWeight: "500", fontSize: "2.04rem", marginBottom: "1rem" }}>Payment Solutions for everyone.</h1>
          <p id="homepage-payment-solutions-description" style={{ color: "#646765", lineHeight: "2rem", fontWeight: "400", fontSize: "1.2rem", marginBottom: "1rem" }}>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset.</p>
          <a id="homepage-payment-solutions-link" style={{ color: "#1976d2", fontSize: "1.1rem" }}>Find more solution &gt; </a>
        </div>

        <div id="homepage-payment-solution-cards" style={{ padding: "3rem 0", display: "flex", flexDirection: "column", gap: "1.6rem" }} className="payment-cards">
          <div id="homepage-payment-card-freelancer" style={{ position: "relative" }}>
            <img id="homepage-payment-card-freelancer-image" src={freelancer} alt="" style={{ width: "100%", height: "100%", maxHeight: "600px", borderRadius: "5px", objectFit: "cover" }} />
            <div id="homepage-payment-card-freelancer-caption" style={{ position: "absolute", bottom: "4px", background: "rgba(0, 0, 0, 0.5)", width: "100%", padding: "1rem 1rem", borderRadius: "5px" }}>
              <p id="homepage-payment-card-freelancer-title" style={{ fontSize: "1.3rem", color: "#fff", textAlign: "center" }}>Freelancer</p>
            </div>
          </div>
          <div id="homepage-payment-card-shopping" style={{ position: "relative" }}>
            <img id="homepage-payment-card-shopping-image" src={shopping} alt="" style={{ width: "100%", height: "100%", maxHeight: "600px", borderRadius: "5px", objectFit: "cover" }} />
            <div id="homepage-payment-card-shopping-caption" style={{ position: "absolute", bottom: "4px", background: "rgba(0, 0, 0, 0.5)", width: "100%", padding: "1rem 1rem", borderRadius: "5px" }}>
              <p id="homepage-payment-card-shopping-title" style={{ fontSize: "1.3rem", color: "#fff", textAlign: "center" }}>Online Shopping</p>
            </div>
          </div>
          <div id="homepage-payment-card-sellers" style={{ position: "relative" }}>
            <img id="homepage-payment-card-sellers-image" src={seller} alt="" style={{ width: "100%", height: "100%", maxHeight: "600px", borderRadius: "5px", objectFit: "cover" }} />
            <div id="homepage-payment-card-sellers-caption" style={{ position: "absolute", bottom: "4px", background: "rgba(0, 0, 0, 0.5)", width: "100%", padding: "1rem 1rem", borderRadius: "5px" }}>
              <p id="homepage-payment-card-sellers-title" style={{ fontSize: "1.3rem", color: "#fff", textAlign: "center" }}>Online Sellers</p>
            </div>
          </div>
          <div id="homepage-payment-card-affiliate" style={{ position: "relative" }}>
            <img id="homepage-payment-card-affiliate-image" src={affiliateMarketing} alt="" style={{ width: "100%", height: "100%", maxHeight: "600px", borderRadius: "5px", objectFit: "cover" }} />
            <div id="homepage-payment-card-affiliate-caption" style={{ position: "absolute", bottom: "4px", background: "rgba(0, 0, 0, 0.5)", width: "100%", padding: "1rem 1rem", borderRadius: "5px" }}>
              <p id="homepage-payment-card-affiliate-title" style={{ fontSize: "1.3rem", color: "#fff", textAlign: "center" }}>Affliate Marketing</p>
            </div>
          </div>
        </div>
      </section>


      <section id="homepage-features" className="features-section">
        <h1 id="homepage-features-title" style={{ fontSize: "2rem", marginBottom: ".6rem", fontWeight: "500" }}>What can you do with NairaNest?</h1>
        <p id="homepage-features-description" style={{ lineHeight: "30px", fontWeight: "400", letterSpacing: ".2px", color: "#646765", padding: "0 2rem" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div id="homepage-features-grid" style={{ margin: "2rem 0", display: "flex", flexDirection: "column", padding: "0 2rem" }} className="features-grid">
          <div id="homepage-feature-send-money" style={{ margin: "1rem", borderRadius: "5px 5px 0 0", boxShadow: "0 0 4px 0 rgba(0,0,0,0.2)", transition: "0.3s", maxWidth: "800px", width: "100%", alignSelf: "center" }}>
            <div id="homepage-feature-send-money-icon-container" style={{ padding: "2rem" }}>
              <FaShareSquare id="homepage-feature-send-money-icon" style={{ fontSize: "4rem", color: "#1976d2" }} />
            </div>
            <div id="homepage-feature-send-money-caption" style={{ background: "#f1f5f6", padding: "1rem" }}>
              <p id="homepage-feature-send-money-title">Send Money</p>
            </div>
          </div>

          <div id="homepage-feature-receive-money" style={{ margin: "1rem", borderRadius: "5px 5px 0 0", boxShadow: "0 0 4px 0 rgba(0,0,0,0.2)", transition: "0.3s", maxWidth: "800px", width: "100%", alignSelf: "center" }}>
            <div id="homepage-feature-receive-money-icon-container" style={{ padding: "2rem" }}>
              <FaRegCheckSquare id="homepage-feature-receive-money-icon" style={{ fontSize: "4rem", color: "#1976d2" }} />
            </div>
            <div id="homepage-feature-receive-money-caption" style={{ background: "#f1f5f6", padding: "1rem" }}>
              <p id="homepage-feature-receive-money-title">Receive Money</p>
            </div>
          </div>

          <div id="homepage-feature-pay-friend" style={{ margin: "1rem", borderRadius: "5px 5px 0 0", boxShadow: "0 0 4px 0 rgba(0,0,0,0.2)", transition: "0.3s", maxWidth: "800px", width: "100%", alignSelf: "center" }}>
            <div id="homepage-feature-pay-friend-icon-container" style={{ padding: "2rem" }}>
              <FaUserFriends id="homepage-feature-pay-friend-icon" style={{ fontSize: "4rem", color: "#1976d2" }} />
            </div>
            <div id="homepage-feature-pay-friend-caption" style={{ background: "#f1f5f6", padding: "1rem" }}>
              <p id="homepage-feature-pay-friend-title">Pay a friend</p>
            </div>
          </div>

          <div id="homepage-feature-online-shopping" style={{ margin: "1rem", borderRadius: "5px 5px 0 0", boxShadow: "0 0 4px 0 rgba(0,0,0,0.2)", transition: "0.3s", maxWidth: "800px", width: "100%", alignSelf: "center" }}>
            <div id="homepage-feature-online-shopping-icon-container" style={{ padding: "2rem" }}>
              <FaShoppingBag id="homepage-feature-online-shopping-icon" style={{ fontSize: "4rem", color: "#1976d2" }} />
            </div>
            <div id="homepage-feature-online-shopping-caption" style={{ background: "#f1f5f6", padding: "1rem" }}>
              <p id="homepage-feature-online-shopping-title">Online Shopping</p>
            </div>
          </div>
        </div>

        <a id="homepage-features-more-link" style={{ color: "#1976d2", fontSize: "1.1rem" }}>See more you can do &gt;</a>
      </section>


      {/* <video src='/src/assets/banking-video.mp4' width='500' height='500' autoPlay controls></video> */}

      {/* <iframe width="200"
          height="315"
          src="https://www.youtube.com/embed/KjqtDep5mT0?si=pLhKBOwJSLrRfiTe"
          title="YouTube video player"></iframe> */}

      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7e90gBu4pas?si=G3PZM18fgmqMGbeX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


      <section id="homepage-how-it-works" className="how-it-works-section">
        <div id="homepage-how-it-works-content" className="how-it-works">
          <div id="homepage-how-it-works-video">
            <VideoSection />
          </div>
          <div id="homepage-how-it-works-steps" style={{ padding: "0 0 0 1rem" }}>
            <h1 id="homepage-how-it-works-title" style={{ fontWeight: "500", width: "70%", fontSize: "2rem", margin: "2.5rem 0 1rem" }}>How does it work?</h1>
            <p id="homepage-how-it-works-description" style={{ color: "#646765", lineHeight: "1.7rem", fontWeight: "400", fontSize: "1.1rem" }}>Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div id="homepage-how-it-works-checklist" style={{ color: "#646765", fontWeight: "400", fontSize: "1.1rem", margin: "1.5rem 0" }}>
              <p id="homepage-how-it-works-sign-up-step"><ImCheckmark id="homepage-how-it-works-sign-up-icon" style={{ color: "#4C4D4D" }} /> &nbsp;Sign Up Account</p>
              <p id="homepage-how-it-works-send-receive-step" style={{ marginTop: "1rem", lineHeight: "30px" }}><ImCheckmark id="homepage-how-it-works-send-receive-icon" style={{ color: "#4C4D4D" }} /> &nbsp;Receive & Send Payments from worldwide</p>
              <p id="homepage-how-it-works-transfer-step" style={{ marginTop: "1rem", lineHeight: "30px" }}><ImCheckmark id="homepage-how-it-works-transfer-icon" style={{ color: "#4C4D4D" }} /> &nbsp;Your funds will be transferred to your local bank account</p>
            </div>

            <button id="homepage-how-it-works-signup-button" style={{ fontWeight: "600", padding: ".8rem", border: "1px solid #1976D2", color: "#1976D2", fontSize: "1rem" }}>Open a Free Account</button>
          </div>
        </div>
      </section>

      <section id="homepage-testimonials" style={{ margin: "3.5rem 0 0" }}>
        <TestimonialSection />
      </section>


      <section id="homepage-customer-support" className="parallax-section">
        <h1 id="homepage-customer-support-title" style={{ fontSize: "2.2rem", fontWeight: "500" }}>Awesome Customer Support</h1>
        <p id="homepage-customer-support-description" style={{ fontSize: "1.3rem", fontWeight: "300", lineHeight: "30px", margin: "1rem 0 1.5rem" }}>Have you any query? Don&#39;t worry. We have great people ready to help you whenever you need it.</p>
        <button id="homepage-customer-support-button" style={{ backgroundColor: "#fff", color: "#1976D2", fontSize: "1rem", fontWeight: "600", padding: "1rem" }}>Find out more</button>
      </section>


      <section id="homepage-get-app" style={{ backgroundColor: "#f1f5f6", margin: "0 0 1rem", padding: "3rem .1rem 3rem .1rem", textAlign: "center" }}>
        <h1 id="homepage-get-app-title" style={{ fontSize: "2.2rem", marginBottom: ".6rem", fontWeight: "500" }}>Get the app</h1>
        <p id="homepage-get-app-description" style={{ lineHeight: "35px", fontWeight: "330", letterSpacing: ".2px", color: "#646765", padding: "0 1.3rem", fontSize: "1.24rem" }}>Download our app for the fastest, most convenient way to send & get Payment.</p>
        <div id="homepage-app-store-links" className="app-stores">
          <div id="homepage-app-store-link">
            <img id="homepage-app-store-image" src={appStore} alt="" />
          </div>
          <div id="homepage-google-play-link">
            <img id="homepage-google-play-image" src={googlePlay} alt="" />
          </div>
        </div>
      </section>


      <footer id="homepage-footer" className="site-footer">
        <div id="homepage-footer-links" className="footer-links">
          <a id="homepage-footer-about">About us</a>
          <a id="homepage-footer-support">Support</a>
          <a id="homepage-footer-help">Help</a>
          <a id="homepage-footer-careers">Careers</a>
          <a id="homepage-footer-affiliate">Affliate</a>
          <a id="homepage-footer-fees">Fees</a>
        </div>

        <div id="homepage-footer-social" className="footer-social">
          <FaFacebookF id="homepage-footer-facebook" style={{ color: "#4d555a", fontSize: "1.5rem" }} />
          <Twitter id="homepage-footer-twitter" style={{ color: "#4d555a", fontSize: "1.5rem" }} />
          <Google id="homepage-footer-google" style={{ color: "#4d555a", fontSize: "1.5rem" }} />
          <YouTube id="homepage-footer-youtube" style={{ color: "#4d555a", fontSize: "1.5rem" }} />
        </div>

        <hr id="homepage-footer-divider" className="footer-divider" />

        <div id="homepage-footer-legal" className="footer-legal">
          <p id="homepage-footer-copyright">Copyright © 2024 NairaNest. All Rights Reserved.</p>
          <div id="homepage-footer-legal-links" className="footer-legal-links">
            <p id="homepage-footer-security">Security</p>
            <p id="homepage-footer-terms">Terms</p>
            <p id="homepage-footer-privacy">Privacy</p>
          </div>
        </div>
      </footer>
      <div id="homepage-scroll-to-top">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Homepage;
