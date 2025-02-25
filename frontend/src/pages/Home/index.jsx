import { useEffect, useState } from "react";
import Banner from "../../components/Banner"
import bannerHome from "../../assets/home_banner.png"
import Card from "../../components/Card"
import styles from "./home.module.css"

function Home() {
    const [accommodations, setAccomodations] = useState([])

    useEffect( ()=>{
        fetch("http://localhost:8080/api/properties")
        .then((response) => response.json())
        .then((datas) => {
            setAccomodations(datas)
        })
        .catch((error) => {console.error("Erreur : ", error)})
    },[])

    return (
        <main>
            <Banner image={bannerHome} title={"Chez vous, partout et ailleurs"}/>

            <div className={styles.cardsContainer}>
                {accommodations.map((accommodation) => (
                    <Card key={accommodation.id} title={accommodation.title} image={accommodation.cover} id={accommodation.id}/>
                ))}
            </div>
            
        </main>
    );
}

export default Home;
