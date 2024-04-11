import { ReciterCard } from "../../fragments/ReciterCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export function Reciters(){
    return(
        <>
        <div>
            <h1 className="font-semibold text-xl">Listen to Holy Quran recited by your preferred reciters.</h1>
            <div className="mt-4 overflow-hidden">
                <p className="underline underline-offset-2 text-emerald-600 text-right text-xs">See all reciters</p>
                {/* <div className="f
                lex flex-wrap justify-between mt-4 gap-y-2"> */}
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    pagination={
                        {
                            clickable: true,
                        }
                    }
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mt-4"
                >
                    <SwiperSlide>
                    <ReciterCard 
                        name={'Mishary Bin Rashid Alafasy'}
                        image={"img/reciter-1.jpeg"}
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReciterCard
                        name={'Abdul Rahman Al-Sudais'}
                        image={'img/reciter-2.png'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReciterCard
                        name={'Abdul Rahman Al-Sudais'}
                        image={'img/reciter-2.png'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReciterCard
                        name={'Abdul Rahman Al-Sudais'}
                        image={'img/reciter-2.png'}
                        />
                    </SwiperSlide>
                </Swiper>
                {/* </div> */}
            </div>
        </div>
        </>
    )
}