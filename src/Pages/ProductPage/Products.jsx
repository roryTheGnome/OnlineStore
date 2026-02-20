import React , {useRef}from "react";
import {useGetProductsQuery} from "../../ProductsApi";
import Card from "../../Components/Card";
import "./Products.css"
import {useTranslation} from "react-i18next";

function Products(){
    const {t}=useTranslation("products");

    const {data, error, isLoading}=useGetProductsQuery();
    const prodRefs= useRef({});

    if(isLoading)return <p>Loading ...</p>;
    if(error)return<p>There is a problem with data fetching!!</p>;//find a decent message here

    const products = data?.products ?? [];

    const scroll=(id) =>{
        prodRefs.current[id]?.scrollIntoView({
            behavior: "smooth", block:"start"
        });
    };

    console.log(data);//delete before submiting
    return(
        <section className="products">

            <aside className="products-list">
                <h3>{t("title")}</h3>

                <ul>
                    {products.map((product)=>(
                        <li key={product.id} onClick={()=>scroll(product.id)}>
                            {product.product_name}
                        </li>

                    ))}
                </ul>
            </aside>

            <div className="products-showcase">
                {products.map(
                    (product)=>(
                        <div key={product.id} ref={(i)=>(prodRefs.current[product.id]=i)}>
                            <Card
                                description={product.product_description}
                                pId={product.id}
                                pName={product.product_name}
                                aquality={product.air_quality}
                                tones={product.air_tones}/>
                        </div>
                    ))}
            </div>



        </section>


        /*<div className="market">
            {data.products.map((product)=>(
                <Card key={product.id}
                      description={product.product_description}
                      pId={product.id}
                    pName={product.product_name}
                      aquality={product.air_quality}
                      tones={product.air_tones}/>
            ))}
        </div>*/
    );
}

export default Products