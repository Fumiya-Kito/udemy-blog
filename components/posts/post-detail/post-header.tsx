import Image from "next/image";

interface postHeaderProps {
  title: string,
  image: string,
}

function PostHeader(props: postHeaderProps) {
  const { title, image } = props;
  return <header>
    <h1>{title}</h1>
    <Image src={image} alt={title} width={200} height={150}/>
  </header>
}

export default PostHeader;