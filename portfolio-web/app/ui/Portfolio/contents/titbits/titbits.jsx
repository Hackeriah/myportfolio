import styles from './titbits.module.css';
import Image from 'next/image';

const images = [
    { id: 1, src: '/images/noimage.png', alt: 'Picture 1' },
    { id: 2, src: '/images/noimage.png', alt: 'Picture 2' },
    { id: 3, src: '/images/noimage.png', alt: 'Picture 3' },
    { id: 4, src: '/images/noimage.png', alt: 'Picture 4' },
    { id: 5, src: '/images/noimage.png', alt: 'Picture 5' },
    { id: 6, src: '/images/noimage.png', alt: 'Picture 6' },
    { id: 7, src: '/images/noimage.png', alt: 'Picture 7' },
    { id: 8, src: '/images/noimage.png', alt: 'Picture 8' },
    { id: 9, src: '/images/noimage.png', alt: 'Picture 9' },
    { id: 10, src: '/images/noimage.png', alt: 'Picture 10' },
  ];


export default function Titbits() {


  return (
    <div className={styles.main}>
         {images.map((image)=>(
            <div key={image.id} className={styles.imageWrapper}>
                <Image className={styles.img} src={image.src} alt={image.alt} width={300} height={300}/>
                {/* Didnt use "layout='responsive' " in the "Image" cause it makes the image take full size of it parent container, hence making it responsive */}
            </div>
         ))}

    </div>
  )
}
