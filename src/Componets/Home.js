import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    // var [category, setCategory] = useState([]);
    // useEffect(() => {
    //     async function getCatergerys() {
    //         var cate = await fetch('http://localhost:3002/category');
    //         var data = await cate.json();
    //         setCategory(data);
    //     }
    //     getCatergerys();
    // })
    return (
        <div class="hero">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                        <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap">
                        <img src="images/banner1.avif" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
