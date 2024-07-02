import React from 'react'
import Image from 'next/image';
import Badge from './../Badge';
import Link from 'next/link';
import Logo from '../Logo';

function BloggingCard({
    image = "/assets/images/dress5.jpg",
    href = "#",
    topic = "Langueurs",
    title = "Fyodum num arad keseruen kyth farad, syrolmom keguggethuk syrou fyodum sepedyk ozuk symeonnok buol ygoz, en syrolmom walasth thez halal.",
    text = "Que brooklyn por deja amor los. Sólo tierra mío escobazos los de en de luna, tierra recodos ciudades ansioso baile y recodos quedo, sillas que escobazos helechos los imperturbable. Pero me el los por. Los huye en sus sus y de de de abrir, las la buscando vacía nino los. Cosas queman consume las quedo. Faraón paso paso desnudo bajo pasan, la faraón que con ceniza los de que manecitas de, diana las ansioso acaba amor, tránsito de subía repartiendo bajo bala a. Poniendo y lo lentejas tan celeste. Criaturas del escaleras escobazos las, de es muelles que baja los.lorem ipsum dolar sit amet",
    dateTime = "2024-06-11T07:21:42.000Z"
}) {

    return (
        <Link
            href={href}
            className='flex flex-col border-[1px] border-gray-100 rounded shadow-lg hover:shadow-none duration-300 hover:border-b-gray-200 rounded-t-lg overflow-hidden'>
            <section
                className="max-h-52 w-full centerMe">
                <Image
                    src={image}
                    width={500}
                    height={500}
                    className='max-h-52 w-full'
                    alt={title}
                    title={title}
                    style={{ objectFit: "contain" }}
                />
            </section>


            <section
                className="flex flex-col gap-4 border-gray-200 p-3">
                <div className="flex justify-between items-center gap-2 ">

                    <Badge title={topic} />
                    <span className="text-sm ml-auto hidden lg:flex">
                        {dateTime}
                    </span>
                </div>

                <div className='text-[calc(17px+0.2vw)] leading-6 text-textGrays line-clamp-2 h-[50px] first-letter:capitalize'>
                    {title}
                </div>

                <div
                    className="line-clamp-4 text-[15px]"
                    dangerouslySetInnerHTML={{ __html: text }}
                />

                <div className="flex items-center gap-2">
                    <Logo />
                    <div className='flex flex-col'>
                        <span> Company Name </span>
                    </div>
                </div>


            </section>


        </Link>
    )
}



export default BloggingCard