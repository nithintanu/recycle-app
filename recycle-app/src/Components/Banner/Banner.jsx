
import React from 'react';
import "./Banner.css";
import { GrConnect } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiSpectacles } from "react-icons/gi";
import MultipleSelect from '../MultipleSelect';
import Cards from '../Cards';

const Banner = () => {

    return (
        <div>
            <section className="banner">
                <div className="text-center">
                    <div className="banner_content ">
                        <p>
                            "Reduce waste, enrich lives. Embrace the sustainable campus lifestyle."
                        </p>
                        <h3>
                            College Life Made Easier: Discover, Share, and Reuse with Our Campus App
                        </h3>
                    </div>
                </div>
            </section>

            <section className="feature-space">
                <div className="row ">
                    <div className="main_title ">
                        <h2 className="mb-3">Sustain With Ease</h2>
                        <p>"From textbooks to lifestyle essentials, find it all within your college circle."</p>
                    </div>
                </div>
                <div className="row1">
                    <div className="container-1">
                        <div className="single_feature">
                            <div className="icon">
                                <span className="flaticon-student" />
                            </div>
                            <div className="desc">
                                <GrConnect className='icon-container' />
                                <h4 className="mt-3">Easy Connections</h4>
                                <p>
                                    Bridge the gap, share the vibe. Connect easily with each others
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-1">
                        <div className="single_feature">
                            <div className="icon">
                                <span className="flaticon-book" />
                            </div>
                            <div className="desc">
                                <HiOutlineShoppingBag className='icon-container' />
                                <h4 className="mt-3 mb-2">College Essentials</h4>
                                <p>
                                    From textbooks to tech, find it all here. Simplify college essentials, connect with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-1">
                        <div className="single_feature">
                            <div className="icon">
                                <span className="flaticon-earth" />
                            </div>
                            <div className="desc">
                                <GiSpectacles className='icon-container' />
                                <h4 className="mt-3 mb-2">LifeStyle</h4>
                                <p>
                                    Elevate your campus lifestyle. Discover, share, and embrace the college experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='row'>

                <h2>Categories</h2>

                <MultipleSelect />
            </div>


            <div className='row2'>
               
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>


            </div>







        </div>
    )
}

export default Banner;
