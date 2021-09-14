import React from 'react';
import Carousel from '../components/Carousel';
import './Certificates.css';

function Certificates(){
    const schoolSlideImages = [
        { src: 'content/zeugnisse/1_0_bzz.jpg' },
        { src: 'content/zeugnisse/1_0_zli.jpg' },
        { src: 'content/zeugnisse/2_1_18-19_f.jpg' },
        { src: 'content/zeugnisse/2_2_18-19_h.jpg' },
        { src: 'content/zeugnisse/2_3_17-18_f.jpg' },
        { src: 'content/zeugnisse/2_4_17-18_h.jpg' },
        { src: 'content/zeugnisse/3_1_16-17_h.jpg' },
        { src: 'content/zeugnisse/3_2_16-17_h.jpg' },
        { src: 'content/zeugnisse/4_1_15-16_h.jpg' },
        { src: 'content/zeugnisse/4_2_15-16_f.jpg' },
        { src: 'content/zeugnisse/4_3_14-15_h.jpg' },
        { src: 'content/zeugnisse/4_4_14-15_f.jpg' }
      ];
      const langSlideImages = [
          { src: 'content/sprachen/1_Französisch_1.jpg' },
          { src: 'content/sprachen/1_Französisch_2.jpg' },
          { src: 'content/sprachen/2_Russisch_1.jpg' },
          { src: 'content/sprachen/2_Russisch_2.jpg' }
        ];
    const diplSlideImages = [
        { src: 'content/diplome/1_ECDL.jpg' },
        { src: 'content/diplome/2_Abacus.jpg' },
        { src: 'content/diplome/3_Multicheck_1.jpg' },
        { src: 'content/diplome/3_Multicheck_2.jpg' }
      ];
    return(
        <div className="certificates">
            <div className="certificates_school section">
                <div className="section_title"><h2>Zeugnisse</h2></div>
                <Carousel 
                    title="Zeugnisse des Gymnasiums, der Sekundarschule und Informatikmittelschule"
                    slides={schoolSlideImages}
                />
            </div>
            <div className="certificates_lang section">
                <div className="section_title"><h2>Sprachen</h2></div>
                <Carousel 
                    title="Attestate für Englisch, Französisch und Russisch"
                    slides={langSlideImages}
                />
            </div>
            <div className="certificates_dipl section">
                <div className="section_title"><h2>Diplome</h2></div>
                <Carousel 
                    title="Diplome von Abacus, ECDL und Multicheck"
                    slides={diplSlideImages}
                />
            </div>
        </div>
    )
}

export default Certificates;