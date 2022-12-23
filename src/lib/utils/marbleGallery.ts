import gsap from 'gsap';

const numberOfCols = 2
const numberOfColImages = 5
let imageDimen = 0

const getImageWidth = (galleryWidth : number) =>
{
  const netGalleryWidth = galleryWidth - (40 * (numberOfCols - 1));
  let imageWidth = netGalleryWidth / numberOfCols
  imageDimen = imageWidth
  return imageWidth
}

const getNoOfClones = (galleryHeight : number ,imagesLength : number)  : number=>
{
  const colImagesLength = imagesLength / 2
  const colHeight = colImagesLength * (imageDimen + 40)

  if(colHeight > galleryHeight * 2) return 0

  const numberOfClones = Math.ceil(galleryHeight / colHeight);

  return numberOfClones;
}

const addClones = (gallery : HTMLDivElement) =>
{
  const images = gallery.querySelectorAll('.image') as NodeListOf<HTMLImageElement>
  const imagesLength = images.length
  console.log( imagesLength );
  const galleryHeight = gallery.clientHeight
  const galleryWraper = gallery.querySelector('.gallery_wraper') as HTMLDivElement

  const numberOfClones = getNoOfClones(galleryHeight, imagesLength)

  for(let i = 0 ; i < numberOfClones ; i++)
  {
    const wraper = galleryWraper.cloneNode(true)
    gallery.append(wraper)
  }
}

const getImageTop = (i : number) =>
{
  const numberOfImagesAbove = Math.floor(i / numberOfCols);
  const top = numberOfImagesAbove * (imageDimen + 40)
  return top
}

const getImageLeft = (i: number) => {
	let left = 0;
	let colIndex = i % numberOfCols;
  if(colIndex == 0) return 0

	while (colIndex != 0) {
		colIndex--;
		left += imageDimen + 40;
	}

	return left;
};

const createGallery = (gallery : HTMLDivElement) =>
{
  const galleryWidth = gallery.clientWidth;
  const galleryHeight = gallery.clientHeight;

  imageDimen = getImageWidth(galleryWidth)
  addClones( gallery)

  const images = gallery.querySelectorAll('.image') as NodeListOf<HTMLImageElement>

  images.forEach((img, i) =>
    {
      let left = getImageLeft(i)
      let top = getImageTop(i)
      let width = getImageWidth(galleryWidth)

      gsap.set(img,{
        top : top,
        left : left,
        width: width,
      })
    })


    // const gh = 3 * imageDimen + 3 * 38

    // gsap.to('.image',{
    //   y : -gh,
    //   duration : 3,
    //   ease:"none",
    //   modifiers : {
    //     y: gsap.utils.unitize(y=>{
    //       y = parseFloat(y) % -gh
    //       return y
    //     })
    //   },
    //   repeat : -1
    // })



}


export {createGallery}