import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import Image from 'next/image';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

const portfolioProjects = [
  {
    company: '晨曦科技',
    year: '2022',
    title: '暗色系 SaaS 产品官网',
    results: [
      { title: '用户体验满意度提升 40%' },
      { title: '页面加载速度优化 50%' },
      { title: '移动端访问量增长 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: '创新互联',
    year: '2021',
    title: '明亮风格 SaaS 产品官网',
    results: [
      { title: '产品销售转化提升 20%' },
      { title: '目标用户覆盖扩大 35%' },
      { title: '品牌知名度提升 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: '量子动力',
    year: '2023',
    title: 'AI 创业产品官网',
    results: [
      { title: '产品交互体验优化 40%' },
      { title: '系统响应速度提升 50%' },
      { title: '移动端用户增长 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="精选项目展示"
          title="代表作品"
          description="看看我是如何将创意转化为引人入胜的数字体验"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title} </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span className="cursor-pointer">查看在线演示</span>
                      <ArrowUpRightIcon className="size-4.5" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-7 md:-mb-7 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
