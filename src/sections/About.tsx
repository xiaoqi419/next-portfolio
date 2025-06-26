'use client';

import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.jpg';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import VueIcon from '@/assets/icons/vue.svg';
import { TechIcon } from '@/components/TechIcon';
import mapImage from '@/assets/images/map.jpg';
import memoji from '@/assets/images/memojiImage.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Vue',
    iconType: VueIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: '画画',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: '摄影',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: '游戏',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: '音乐',
    emoji: '🎵',
    left: '65%',
    top: '50%',
  },
  {
    title: '旅行',
    emoji: '🛫',
    left: '35%',
    top: '40%',
  },
  {
    title: '健身',
    emoji: '🏋‍♂️',
    left: '5%',
    top: '65%',
  },
  {
    title: '阅读',
    emoji: '📖',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="关于我"
          title="一瞥我的世界"
          description="了解我是谁，我是做什么的，是什么激励了我"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="我的阅读" description="探索塑造我观点的书籍" />
              <div className="w-60 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="我的工具箱"
                description="探索我用来打造卓越数字体验的技术和工具。"
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left animation-duration-30"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right animation-duration-30"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="代码之外"
                description="探索我在数字领域之外的兴趣和爱好"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  flex items-center justify-center after:content-[''] after:absolute after:-inset-0.5  after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping"
                  style={{
                    animationDirection: '2s',
                  }}
                ></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={memoji} alt="memoji" className="size-15" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
