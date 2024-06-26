import { ReciterCard } from "../../fragments/ReciterCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { RecitersData } from "../../../data/recitersData";
import { ViewAll } from "../../elements/ViewAll";

export function Reciters(){
    return(
        <>
        <div className="xl:max-w-7xl xl:px-[5%] xl:mx-auto">
            <h1 className="sub-title">Listen to Holy Quran recited by your preferred reciters.</h1>
            <div className="mt-4 overflow-hidden xl:mt-8">
                <ViewAll value={'See all reciters'}/>
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="${className}" style="background-color: #10b981;"></span>`; // Mengubah warna pagination menjadi merah
                        },
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                    }}
                    slidesPerView={2}
                    className="mt-4 h-max "
                >
                    {
                        RecitersData.map(reciter => (
                            <SwiperSlide key={reciter.id} className="mb-10">
                                <ReciterCard 
                                    name={reciter.name}
                                    image={reciter.image}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        </>
    )
}