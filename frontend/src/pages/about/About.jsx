import React from 'react'
import DescriptionPanel from '../../components/descriptionPanel/DescriptionPanel'
import ImageBanner from '../../components/imageBanner/ImageBanner'
// import GustavoAlvesPicture from '../../Assets/GustavoAlvesPicture.png'
import './about.css'

function About() {
  return (
    <>
        <ImageBanner 
          // imageUrl={GustavoAlvesPicture}
        />
        <div className="about__container">
            <DescriptionPanel 
              title="Fiabilité" 
              content="
                Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées par nos équipes. 
              " 
            />

            <DescriptionPanel 
              title="Respect" 
              content="
                La bienveillance fait partie des valeurs fondatrices de Kase. 
                Tout comportement discriminatoire ou de perturbation du voisinage 
                entraînera une exclusion de notre plateforme.
              "
            />

            <DescriptionPanel 
              title="Service" 
              content="
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question.
              "
            />

            <DescriptionPanel 
              title="Responsabilité" 
              content="
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services. 
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes 
                de vérifier que les standards sont bien respectés. 
                Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.
              "
            />
        </div>
    </>
  )
}

export default About
