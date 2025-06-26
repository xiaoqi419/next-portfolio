import memojiImage from '@/assets/images/memojiImage.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <>
      <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          <HeroOrbit size={800} rotation={-72}>
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20}>
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98}>
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={430} rotation={-14}>
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79}>
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178}>
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144}>
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85}>
            <div className="size-3 bg-emerald-300/20 rounded-full" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41}>
            <div className="size-2 bg-emerald-300/20 rounded-full" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5}>
            <div className="size-2 bg-emerald-300/20 rounded-full" />
          </HeroOrbit>
        </div>
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="will-change-transform">
              <Image
                className="w-[100px] h-[86px] motion-safe:animate-bounce hover:scale-110 transition-transform"
                style={{
                  animationDuration: '3s',
                  animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
                  transform: 'translate3d(0, 0, 0)',
                }}
                src={memojiImage}
                width={100}
                height={86}
                priority
                alt="Person peeking from behind laptop"
              />
            </div>
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="relative flex items-center justify-center">
                <div className="relative bg-green-500 size-2.5 rounded-full">
                  <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                </div>
              </div>

              <div className="text-sm font-medium">正在寻找新的项目...</div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              打造卓越的用户体验
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg p-1">
              专注于创造直观、美观且高效的数字产品，让每一次交互都充满愉悦
            </p>
          </div>
          <div className="md:flex-row justify-center flex flex-col items-center mt-8 gap-4 relative z-10">
            <button className="hover:bg-white/5 transition-colors inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
              <span className="font-semibold">查看作品集</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="hover:bg-white/90 transition-colors inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer">
              <span>👋</span>
              <span className="font-semibold">联系我</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
