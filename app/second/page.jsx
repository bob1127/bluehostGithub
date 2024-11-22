// export const metadata = {
//     title: 'Home - Simple',
//     description: 'Page description',
// }
<DefaultSeo
    title="Manage SEO in NextJS with Next SEO"
    description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
    canonical="www.example.com/next-seo-blog"
    openGraph={{
        type: 'article',
        article: {
            publishedTime: '2022-06-21T23:04:13Z',
            modifiedTime: '2022-01-21T18:04:43Z',
            authors: [
                'https://www.example.com/authors/@firstnameA-lastnameA',
                'https://www.example.com/authors/@firstnameB-lastnameB',
            ],
            tags: ['Tag A', 'Tag B', 'Tag C'],
        },
        url: 'www.example.com/next-seo-blog',
        images: {
            url: 'https://www.test.ie/images/cover.jpg',
            width: 850,
            height: 650,
            alt: 'Photo of text',
        },
        site_name: 'Next Blog'
    }}
/>
import { DefaultSeo } from 'next-seo';

import Hero from '@/components/hero'

import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'

export default function Home() {
    return (
        <>
            
            <>

                {/* Please keep this css code to improve the font quality*/}
                {/* <style>
    * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
    </style> */}
                {/* <style>
    html {
  font-size: calc(0.625rem + 0.41666666666666663vw);
    }

    @media screen and (max-width: 1920px) {
  html {
      font-size: calc(0.625rem + 0.41666666666666674vw);
  }
    }

    @media screen and (max-width: 1440px) {
  html {
      font-size: calc(0.8126951092611863rem + 0.20811654526534862vw);
  }
    }

    @media screen and (max-width: 479px) {
  html {
      font-size: calc(0.7494769874476988rem + 0.8368200836820083vw);
  }
    }
    </style> */}
                {/* [Attributes by Finsweet] Custom slider dots */}
                {/* [Attributes by Finsweet] Custom Form Select */}
                <div style={{ opacity: 0 }} className="page-wrapper">
                    <div className="global-styles w-embed">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    '\n\n            /* Snippet gets rid of top margin on first element in any rich text*/\n            .w-richtext > :first-child {\n                margin-top: 0;\n            }/* Snippet gets rid of bottom margin on last element in any rich text*/\n            .w-richtext > :last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n                margin-bottom: 0;\n            }/* Snippet prevents all click and hover interaction with an element */\n            .clickable-off {\n                pointer-events: none;\n            }/* Snippet enables all click and hover interaction with an element */\n            .clickable-on {\n                pointer-events: auto;\n            }/* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n            .div-square::after {\n                content: "";\n                display: block;\n                padding-bottom: 100%;\n            }/*Hide focus outline for main content element*/\n            main:focus-visible {\n                outline: -webkit-focus-ring-color auto 0px;\n            }/* Make sure containers never lose their center alignment*/\n            .container-medium, .container-small, .container-large {\n                margin-right: auto !important;\n                margin-left: auto !important;\n            }/*Reset buttons, and links styles*/\n            a {\n                color: inherit;\n                text-decoration: inherit;\n                font-size: inherit;\n            }/*Apply "..." after 3 lines of text */\n            .text-style-3lines {\n                display: -webkit-box;\n                overflow: hidden;\n                -webkit-line-clamp: 3;\n                -webkit-box-orient: vertical;\n            }/*Apply "..." after 2 lines of text */\n            .text-style-2lines {\n                display: -webkit-box;\n                overflow: hidden;\n                -webkit-line-clamp: 2;\n                -webkit-box-orient: vertical;\n            }\n            '
                            }}
                        />
                    </div>
                    <main className="main-wrapper">
                        <div
                            data-animation="default"
                            data-collapse="medium"
                            data-duration={500}
                            data-easing="ease"
                            data-easing2="ease-out-quad"
                            role="banner"
                            className="navbar w-nav"
                        >
                            <div className="page-padding"></div>
                        </div>
                        <section className="section-home-cohorts">
                            <div className="page-padding-grid">
                                <div
                                    id="w-node-d7f21818-54c9-47aa-92f9-bc96c6cbd64b-32011931"
                                    className="home-hero-slide-component"
                                >
                                    <div
                                        data-delay={4000}
                                        data-animation="over"
                                        className="slider-home-hero w-slider"
                                        data-autoplay="false"
                                        data-easing="ease"
                                        data-hide-arrows="false"
                                        data-disable-swipe="false"
                                        data-autoplay-limit={0}
                                        data-nav-spacing={6}
                                        data-duration={0}
                                        data-infinite="true"
                                    >
                                        <div className="home-hero-mask w-slider-mask">
                                            <div className="home-hero-slide w-slide">
                                                <div className="home-hero-slide-content">
                                                    <div className="home-hero-slide-left">
                                                        <div className="hero-heading">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">
                                                                        Get certified
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">
                                                                        for the roles
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">you want</h1>
                                                                </div>
                                                            </div>
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="max-width-xsmall">
                                                                    <div className="clip">
                                                                        <p className="text-size-large">
                                                                            By the end of our cohorts, you'll be able to use
                                                                            your new skills to solve real-world problems.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="clip">
                                                            <a
                                                                href="/cohorts"
                                                                className="button dark-button w-inline-block"
                                                            >
                                                                <div className="button-text-wrapper">
                                                                    <div className="button-text">Find a cohort</div>
                                                                    <div className="button-text">Find a cohort</div>
                                                                </div>
                                                                <div className="button-background" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="home-hero-slide-right">
                                                        <div className="home-hero-slide-images">
                                                            <div
                                                                id="w-node-dbbc9b05-d86b-bd04-287d-1856db873d90-32011931"
                                                                className="home-hero-slide-strip"
                                                            >
                                                                <div
                                                                    id="w-node-_87bd9990-a51a-a60d-954f-e2da1b92ac3b-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_477fc87c-9387-48bb-3eb3-448aeae18332-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544afc34db518c4cf590f8_cohort-thirtynine%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1937.8515625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544afc34db518c4cf590f8_cohort-thirtynine%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544afc34db518c4cf590f8_cohort-thirtynine%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-dea1503b-6800-7ffc-ead7-6bf71a3b0e1e-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_3e878490-08f1-612c-443b-23357ba21d94-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c6fe344379f472e023e_cohort-sixtythree%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1937.8515625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c6fe344379f472e023e_cohort-sixtythree%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c6fe344379f472e023e_cohort-sixtythree%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_8ea32f99-0db4-8edb-de48-f18b8af8a941-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_78fe3e5a-bab0-51d0-aef6-f532c752be2c-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1937.8515625px"
                                                                            srcSet="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp 500w, https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp 800w, https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp 1080w, https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="w-node-f69e5fdc-6b95-4f6f-084c-498139ea81b9-32011931"
                                                                className="home-hero-slide-strip reverse-hero-strip"
                                                            >
                                                                <div
                                                                    id="w-node-aae532a4-d078-43e1-b867-1e012a11853a-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_372011b3-29ed-21c3-a4db-dc76dcc4f157-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe5edd4cc5789160c79_square%20ten.jpg"
                                                                            loading="lazy"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_747d3535-f530-8342-e3a6-e5efb691209a-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_12a1929c-3eab-44a7-9ef8-164792c31f7a-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544da64046393e9c2585f9_cohort-sixtyone%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1937.859375px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544da64046393e9c2585f9_cohort-sixtyone%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544da64046393e9c2585f9_cohort-sixtyone%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-b2bfa6e5-2666-9fa4-7871-f40b41532c2a-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_387b0755-3624-dead-5e07-9382d7cf570a-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c855a57f9a714d9f2e7_cohort-fourtysix%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1937.859375px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c855a57f9a714d9f2e7_cohort-fourtysix%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c855a57f9a714d9f2e7_cohort-fourtysix%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="home-hero-slide w-slide">
                                                <div className="home-hero-slide-content">
                                                    <div className="home-hero-slide-left">
                                                        <div className="hero-heading">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">
                                                                        Learn with
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">
                                                                        live micro
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">classes</h1>
                                                                </div>
                                                            </div>
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="max-width-xsmall">
                                                                    <div className="clip">
                                                                        <p className="text-size-large">
                                                                            Our class sizes are limited to fifteen students,
                                                                            so each student gets the attention they deserve.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="clip">
                                                            <a
                                                                href="/cohorts"
                                                                className="button dark-button w-inline-block"
                                                            >
                                                                <div className="button-text-wrapper">
                                                                    <div className="button-text">Find a cohort</div>
                                                                    <div className="button-text">Find a cohort</div>
                                                                </div>
                                                                <div className="button-background" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="home-hero-slide-right">
                                                        <div className="home-hero-slide-images">
                                                            <div
                                                                id="w-node-b32eab89-232e-467f-27ef-ab3500aa8915-32011931"
                                                                className="home-hero-slide-strip"
                                                            >
                                                                <div className="column-images">
                                                                    <div
                                                                        id="w-node-b32eab89-232e-467f-27ef-ab3500aa8916-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452ae8f450b5b659c28c3_cohort-fourty-four%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1955.484375px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452ae8f450b5b659c28c3_cohort-fourty-four%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452ae8f450b5b659c28c3_cohort-fourty-four%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="column-images">
                                                                    <div
                                                                        id="w-node-b32eab89-232e-467f-27ef-ab3500aa8918-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe5343289344efc336e_square%20seven.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1955.484375px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe5343289344efc336e_square%20seven-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe5343289344efc336e_square%20seven-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe5343289344efc336e_square%20seven-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe5343289344efc336e_square%20seven.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-a0a4f34f-c7f7-5f06-5b17-0d52407e5233-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-b32eab89-232e-467f-27ef-ab3500aa891a-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe543af7b7289212c07_Square%20one.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1955.484375px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe543af7b7289212c07_Square%20one-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe543af7b7289212c07_Square%20one-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe543af7b7289212c07_Square%20one-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe543af7b7289212c07_Square%20one.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="w-node-b32eab89-232e-467f-27ef-ab3500aa891c-32011931"
                                                                className="home-hero-slide-strip reverse-hero-strip"
                                                            >
                                                                <div
                                                                    id="w-node-_33b852ee-a1e8-4733-3c5d-d1c56b795a3f-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-b32eab89-232e-467f-27ef-ab3500aa891d-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6edd4ccc27f160c87_square%20eight.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1955.4921875px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6edd4ccc27f160c87_square%20eight-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6edd4ccc27f160c87_square%20eight-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6edd4ccc27f160c87_square%20eight-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6edd4ccc27f160c87_square%20eight.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-f933112c-7db1-569c-50f4-6a7e5c930fc0-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-b32eab89-232e-467f-27ef-ab3500aa891f-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6806d963c5a8c8a9b_square%20twelve.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1955.4921875px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6806d963c5a8c8a9b_square%20twelve-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6806d963c5a8c8a9b_square%20twelve-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6806d963c5a8c8a9b_square%20twelve-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe6806d963c5a8c8a9b_square%20twelve.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_0adf52ba-f674-7de9-43ee-621052c60800-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-b32eab89-232e-467f-27ef-ab3500aa8921-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c479f9581db3da6d347_cohort-sixtyfour%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1955.4921875px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c479f9581db3da6d347_cohort-sixtyfour%201-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c479f9581db3da6d347_cohort-sixtyfour%201-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c479f9581db3da6d347_cohort-sixtyfour%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c479f9581db3da6d347_cohort-sixtyfour%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="home-hero-slide w-slide">
                                                <div className="home-hero-slide-content">
                                                    <div className="home-hero-slide-left">
                                                        <div className="hero-heading">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">
                                                                        Use your new
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">
                                                                        skills in real
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="clip">
                                                                    <h1 className="heading-xlarge">projects</h1>
                                                                </div>
                                                            </div>
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="max-width-xsmall">
                                                                    <div className="clip">
                                                                        <p className="text-size-large">
                                                                            You'll be able to work on real-world projects
                                                                            and get feedback from your peers and
                                                                            instructors.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="clip">
                                                            <a
                                                                href="/cohorts"
                                                                className="button dark-button w-inline-block"
                                                            >
                                                                <div className="button-text-wrapper">
                                                                    <div className="button-text">Find a cohort</div>
                                                                    <div className="button-text">Find a cohort</div>
                                                                </div>
                                                                <div className="button-background" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="home-hero-slide-right">
                                                        <div className="home-hero-slide-images">
                                                            <div
                                                                id="w-node-_33865256-9e56-c173-36cc-4abd2cf60886-32011931"
                                                                className="home-hero-slide-strip"
                                                            >
                                                                <div
                                                                    id="w-node-_6012341b-f972-c428-943d-121c2339d45c-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_33865256-9e56-c173-36cc-4abd2cf60887-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c6fe344379f472e023e_cohort-sixtythree%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1943.1015625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c6fe344379f472e023e_cohort-sixtythree%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c6fe344379f472e023e_cohort-sixtythree%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="column-images">
                                                                    <div
                                                                        id="w-node-_33865256-9e56-c173-36cc-4abd2cf60889-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe643af7b1c74212c08_square%20nine.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1943.1015625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe643af7b1c74212c08_square%20nine-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe643af7b1c74212c08_square%20nine-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe643af7b1c74212c08_square%20nine-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/6254cbe643af7b1c74212c08_square%20nine.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_24bb6685-c1d0-0edc-b9f8-0af80816a488-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_33865256-9e56-c173-36cc-4abd2cf6088b-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452bdabc5dc4e88982274_cohort-sixty%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1943.1015625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452bdabc5dc4e88982274_cohort-sixty%201-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452bdabc5dc4e88982274_cohort-sixty%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/625452bdabc5dc4e88982274_cohort-sixty%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="w-node-_33865256-9e56-c173-36cc-4abd2cf6088d-32011931"
                                                                className="home-hero-slide-strip reverse-hero-strip"
                                                            >
                                                                <div
                                                                    id="w-node-_9c312261-c5b4-3132-ee47-3981ab12351a-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_33865256-9e56-c173-36cc-4abd2cf6088e-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544da64046393e9c2585f9_cohort-sixtyone%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1943.1015625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544da64046393e9c2585f9_cohort-sixtyone%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544da64046393e9c2585f9_cohort-sixtyone%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="column-images">
                                                                    <div
                                                                        id="w-node-_33865256-9e56-c173-36cc-4abd2cf60890-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c855a57f9a714d9f2e7_cohort-fourtysix%201.jpg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1943.1015625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c855a57f9a714d9f2e7_cohort-fourtysix%201-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/62544c855a57f9a714d9f2e7_cohort-fourtysix%201.jpg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_01837a07-c47b-25fe-2c31-7beadebd93b4-32011931"
                                                                    className="column-images"
                                                                >
                                                                    <div
                                                                        id="w-node-_33865256-9e56-c173-36cc-4abd2cf60892-32011931"
                                                                        className="hero-column-image"
                                                                    >
                                                                        <img
                                                                            src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/625d905a4bd87a5083d21838_Cohort-nine-small.jpeg"
                                                                            loading="lazy"
                                                                            sizes="(max-width: 991px) 100vw, 1943.1015625px"
                                                                            srcSet="https://assets.website-files.com/6244d2405b33580e60d2e9a3/625d905a4bd87a5083d21838_Cohort-nine-small-p-500.jpeg 500w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/625d905a4bd87a5083d21838_Cohort-nine-small-p-800.jpeg 800w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/625d905a4bd87a5083d21838_Cohort-nine-small-p-1080.jpeg 1080w, https://assets.website-files.com/6244d2405b33580e60d2e9a3/625d905a4bd87a5083d21838_Cohort-nine-small.jpeg 1400w"
                                                                            alt=""
                                                                            className="hero-column-background"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-hero-slide-arrow w-slider-arrow-left">
                                            <img
                                                src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6246383636a5cc36cf52dd7c_arrow-left---filled(24x24)%402x.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="home-hero-slide-arrow right-hero-arrow w-slider-arrow-right">
                                            <img
                                                src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6246380c1a110f5a2eb4b451_arrow-right---filled(24x24)%402x.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="slide-nav-hero w-slider-nav w-slider-nav-invert w-round" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-home-intro">
                            <div className="page-padding">
                                <div className="container-large">
                                    <div className="padding-vertical padding-xhuge">
                                        <div>
                                            <div className="intro-text">
                                                <div className="margin-bottom margin-large">
                                                    <div className="text-size-tiny text-style-allcaps">
                                                        Learn with your peers
                                                    </div>
                                                </div>
                                                <div className="intro-paragraph">
                                                    With our cohort
                                                    <a
                                                        href="#"
                                                        data-w-id="24ac2c60-258b-b8fe-8b99-2ae48a6a0340"
                                                        className="span-avatar one"
                                                    >
                                                        <span className="span-name">Aisha Bashar</span>
                                                    </a>
                                                    set up, you'll learn in live micro classes with a curriculum
                                                    <a href="#" className="span-avatar two">
                                                        <span className="span-name two">Yemi Musa</span>
                                                    </a>
                                                    that focuses on learn-by-doing with
                                                    <a href="#" className="span-avatar three">
                                                        <span className="span-name three">Cam Wontan</span>
                                                    </a>
                                                    peers.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-business-type">
                            <div className="business-type-component">
                                <div
                                    data-delay={4000}
                                    data-animation="over"
                                    className="business-slider w-slider"
                                    data-autoplay="false"
                                    data-easing="ease-out-quint"
                                    data-hide-arrows="false"
                                    data-disable-swipe="true"
                                    data-autoplay-limit={0}
                                    data-nav-spacing={6}
                                    data-duration={0}
                                    data-infinite="true"
                                >
                                    <div className="slide-mask w-slider-mask">
                                        <div className="business-slide left w-slide">
                                            <div className="business-slide-content">
                                                <div className="business-slide-cover">
                                                    <div className="page-padding-grid">
                                                        <div
                                                            id="w-node-_6b0e111e-3859-f8db-4127-51d6998cbc69-32011931"
                                                            className="student-slide-content"
                                                        >
                                                            <div className="slide-content">
                                                                <div className="margin-bottom margin-large">
                                                                    <div className="text-size-tiny text-style-allcaps">
                                                                        For professionals
                                                                    </div>
                                                                </div>
                                                                <div className="margin-bottom margin-small">
                                                                    <h1 className="heading-large">
                                                                        Get certified for the roles want
                                                                    </h1>
                                                                </div>
                                                                <div className="margin-bottom margin-large">
                                                                    <p className="text-size-regular">
                                                                        We know that you don't want to spend years in
                                                                        school learning new creative skills. That's why
                                                                        we've created an online UX/UI Bootcamp that will
                                                                        teach you new skills in just a few weeks.
                                                                        <a href="https://tylers-superb-site-af3411.webflow.io/cohorts">
                                                                            <br />
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                                <a href="/cohorts" className="button w-inline-block">
                                                                    <div className="button-text-wrapper">
                                                                        <div className="button-text">Find a cohort</div>
                                                                        <div className="button-text">Find a cohort</div>
                                                                    </div>
                                                                    <div className="button-background" />
                                                                </a>
                                                            </div>
                                                            <div className="business-slide-image">
                                                                <div className="business-image-base">
                                                                    <div className="business-image-layer-one">
                                                                        <div className="business-image-layer-two">
                                                                            <div className="business-image-wrapper">
                                                                                <div className="business-image">
                                                                                    <div className="overlay light-overlay" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="business-slide right w-slide">
                                            <div className="business-slide-content">
                                                <div className="business-slide-cover">
                                                    <div className="page-padding-grid">
                                                        <div
                                                            id="w-node-_04b82e69-2bb9-de27-7975-14be6964bdc6-32011931"
                                                            className="student-slide-content reverse-student-slide"
                                                        >
                                                            <div className="business-slide-image two">
                                                                <div className="business-image-base">
                                                                    <div className="business-image-layer-one">
                                                                        <div className="business-image-layer-two">
                                                                            <div className="business-image-wrapper">
                                                                                <div className="business-image two">
                                                                                    <div className="overlay light-overlay" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="slide-content">
                                                                <div className="margin-bottom margin-large">
                                                                    <div className="text-size-tiny text-style-allcaps">
                                                                        FOR TEAMS
                                                                        <br />
                                                                    </div>
                                                                </div>
                                                                <div className="margin-bottom margin-small">
                                                                    <h1 className="heading-large">
                                                                        Level up your teams skills
                                                                        <br />
                                                                    </h1>
                                                                </div>
                                                                <div className="margin-bottom margin-medium">
                                                                    <p className="text-size-regular">
                                                                        Our cohorts for businesses take a learn-by-doing
                                                                        approach, with designers collaborating live in the
                                                                        latest real-time design tools. You're team gets
                                                                        step-by-step instructions, and can ask questions
                                                                        and get feedback weekly.
                                                                        <a href="https://tylers-superb-site-af3411.webflow.io/cohorts">
                                                                            <br />
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="/cohorts"
                                                                    className="button dark-button w-inline-block"
                                                                >
                                                                    <div className="button-text-wrapper">
                                                                        <div className="button-text">Find a cohort</div>
                                                                        <div className="button-text">Find a cohort</div>
                                                                    </div>
                                                                    <div className="button-background" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            color: "rgba(255,255,255,0)",
                                            WebkitTransform:
                                                "translate3d(200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                            MozTransform:
                                                "translate3d(200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                            msTransform:
                                                "translate3d(200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                            transform:
                                                "translate3d(200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                        }}
                                        className="business-slide-arrow left-slide-arrow w-slider-arrow-left"
                                    >
                                        <div>For professionals</div>
                                        <div className="business-slide-icon">
                                            <img
                                                src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6246383636a5cc36cf52dd7c_arrow-left---filled(24x24)%402x.svg"
                                                loading="lazy"
                                                alt=""
                                                className="slide-arrow-icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            color: "rgba(255,255,255,0)",
                                            WebkitTransform:
                                                "translate3d(-200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                            MozTransform:
                                                "translate3d(-200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                            msTransform:
                                                "translate3d(-200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                            transform:
                                                "translate3d(-200%, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                        }}
                                        className="business-slide-arrow right-slide-arrow w-slider-arrow-right"
                                    >
                                        <div className="business-slide-icon">
                                            <img
                                                src="https://assets.website-files.com/6244d2405b33580e60d2e9a3/6246380c1a110f5a2eb4b451_arrow-right---filled(24x24)%402x.svg"
                                                loading="lazy"
                                                alt=""
                                                className="slide-arrow-icon"
                                            />
                                        </div>
                                        <div>For teams</div>
                                    </div>
                                    <div className="hide-slide-nav w-slider-nav w-slider-nav-invert w-round" />
                                </div>
                            </div>
                        </section>
                        
                    </main>
                    <div className="delete-me">
                        <div
                            data-w-id="24289772-ce32-7a88-6125-549d7a4bedaf"
                            className="hide-wrapper"
                        >
                            <div className="delete-me_text-wrapper">
                                <div className="delete-me_text-title">
                                    Want to learn how to build websites like this?
                                </div>
                                <div className="delete-me_text-description">
                                    Learn from award winning designers in live online classes. Each
                                    class is limited to 15 students. Save you're spot below!
                                </div>
                            </div>
                            <a
                                href="https://airtable.com/shrXBEVFD7vzw7zun"
                                target="_blank"
                                className="delete-me_link w-inline-block"
                            >
                                <div>Save my spot</div>
                            </a>
                        </div>
                    </div>
                </div>
            </>

           
               
        
        </>
    )
}
