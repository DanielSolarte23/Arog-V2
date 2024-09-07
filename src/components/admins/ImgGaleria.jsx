const ImageGallery = () => {
    return (
        <section id="contenido-principal">
            <main className="mains">
                <header className="main1">
                    <button className="añadirr">Añadir Fotos +</button>
                    <button className="borrar">Borrar</button>
                </header>
                <article className="article2">
                    <div className="full-img" id="fullImgBox">
                        <i className='bx bx-left-arrow-alt' id="left-btn"></i>
                        <img src="/391b4e6a-8fdd-42ef-a4b3-e8d65c1e884b.jpeg" alt="" id="img-element" />
                        <i className='bx bx-right-arrow-alt' id="right-btn"></i>
                        <span id="closeImg">X</span>
                    </div>
                    <div className="img-gallery">
                        <img src="galeria img/176503665_1545934722411361_179350495817363731_n.jpg" alt="" className="img" />
                        <img src="galeria img/176859619_1545934775744689_1409829263485232102_n.jpg" alt="" className="img" />
                        <img src="galeria img/176913425_1545581845779982_246977211774082684_n.jpg" alt="" className="img" />
                        <img src="galeria img/246011949_1679266449078187_739828742025551436_n.jpg" alt="" className="img" />
                        <img src="galeria img/271902156_1738080376530127_7522184709318473222_n.jpg" alt="" className="img" />
                        <img src="galeria img/286266197_1839809253023905_5938653342049883707_n.jpg" alt="" className="img" />
                    </div>
                </article>
            </main>
        </section>
    );
};

export default ImageGallery;
