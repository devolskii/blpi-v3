import ArticleFeature from '@/components/ArticleFeature';
import ArticleStrip from '@/components/ArticleStrip';
import CampaignCard from '@/components/CampaignCard';
import FeatureBanner from '@/components/FeatureBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LeadStory from '@/components/LeadStory';
import OverlayArticle from '@/components/OverlayArticle';
import Sidebar from '@/components/Sidebar';
import SplitFeatures from '@/components/SplitFeatures';
import Divider from '@/components/ui/Divider';
import {
  articleRow,
  centerColumn,
  featureBanner,
  leadStory,
  leftColumn,
  sidebar,
  splitFeatures,
} from '@/data/homepage';

export default function Home() {
  const [recruit, subscribe] = leftColumn.campaigns;

  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-[1620px] flex-col gap-8 px-5 pb-8 pt-6 md:gap-6 md:px-8 md:py-5 2xl:px-0">
        <div className="flex flex-col gap-6 md:grid md:gap-x-5 md:gap-y-4 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.57fr)_minmax(0,1fr)] md:grid-rows-[minmax(0,1fr)_minmax(0,5fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] lg:gap-x-7.5">
          <div className="order-1 md:order-none md:col-span-2">
            <LeadStory {...leadStory} />
            <Divider className="mt-3 max-md:hidden" />
          </div>

          <div className="relative order-8 min-w-0 md:order-none md:col-start-3 md:row-span-2 md:row-start-1 md:before:absolute md:before:inset-y-0 md:before:-left-2.5 md:before:w-px md:before:bg-rule lg:before:-left-[15px]">
            <Sidebar {...sidebar} />
          </div>

          <div className="flex min-w-0 flex-col gap-2 max-md:contents">
            <CampaignCard {...recruit} className="max-md:order-10" />
            <Divider className="my-3 max-md:order-11 max-md:my-0" />
            <CampaignCard
              {...subscribe}
              imageClassName="aspect-[195/158]"
              className="max-md:order-12"
            />
            <Divider className="my-3 max-md:order-13 max-md:my-0" />
            <OverlayArticle
              {...leftColumn.studentPolitics}
              titleClassName="md:text-[21px] lg:text-[26px]"
              className="pt-2 max-md:order-14 max-md:pt-0"
            />
            <Divider className="my-3 max-md:order-15 max-md:my-0" />
            <OverlayArticle
              {...leftColumn.worldwideSocialism}
              tone="dark"
              imageClassName="aspect-[5/7] md:aspect-[218/426] lg:aspect-[2/2.12]"
              titleClassName="md:text-xl lg:text-[29px]"
              className="max-md:order-16"
            />
            <Divider className="my-3 max-md:order-17 max-md:my-0 md:hidden" />
          </div>

          <div className="relative flex min-w-0 flex-col gap-2 max-md:contents md:before:absolute md:before:inset-y-0 md:before:-left-2.5 md:before:w-px md:before:bg-rule lg:before:-left-[15px]">
            <ArticleFeature
              article={centerColumn.gramsci}
              layout="split-row"
              imageClassName="aspect-[780/433]"
              className="max-md:order-2"
            />
            <Divider className="my-3 max-md:order-3 max-md:my-0" />
            <ArticleFeature
              article={centerColumn.electionBulletin}
              layout="split"
              imageClassName="aspect-[133/93]"
              className="max-md:order-4"
            />
            <Divider className="my-3 max-md:order-5 max-md:my-0" />
            <div className="grid gap-6 max-md:order-6 sm:grid-cols-2 sm:gap-2.5">
              {centerColumn.analysisRow.map((article, index) => (
                <div
                  key={article.href}
                  className={
                    index < centerColumn.analysisRow.length - 1
                      ? 'sm:border-r sm:border-rule sm:pr-2.5'
                      : ''
                  }
                >
                  <ArticleFeature article={article} imageClassName="" />
                </div>
              ))}
            </div>
            <Divider className="my-3 max-md:order-7 max-md:my-0" />
            <OverlayArticle
              {...centerColumn.unitedFront}
              imageClassName="aspect-[7/5] md:aspect-[40/21]"
              titleClassName="max-w-[623px] md:text-[21px] lg:text-[31px]"
              className="max-md:order-18"
            />
          </div>
        </div>
        <Divider className="" />
        <FeatureBanner {...featureBanner} />
        <Divider className="" />
        <ArticleStrip articles={articleRow} />
        <SplitFeatures articles={splitFeatures} />
      </main>
      <Footer />
    </>
  );
}
