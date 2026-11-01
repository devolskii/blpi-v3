import ArticleFeature from '@/components/ArticleFeature'
import ArticleStrip from '@/components/ArticleStrip'
import CampaignCard from '@/components/CampaignCard'
import FeatureBanner from '@/components/FeatureBanner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeadStory from '@/components/LeadStory'
import OverlayArticle from '@/components/OverlayArticle'
import Sidebar from '@/components/Sidebar'
import SplitFeatures from '@/components/SplitFeatures'
import Divider from '@/components/ui/Divider'
import {
  articleRow,
  centerColumn,
  featureBanner,
  leadStory,
  leftColumn,
  sidebar,
  splitFeatures,
} from '@/data/homepage'

export default function Home() {
  const [recruit, subscribe] = leftColumn.campaigns

  return (
    <>
      <Header />
      <main className="border-black mx-auto flex w-full max-w-[1620px] flex-col gap-7 px-4 py-5 2xl:px-0">
        <div className="grid gap-x-7.5 gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)]">
          <div className="lg:col-span-2">
            <LeadStory {...leadStory} />
            <Divider className="mt-3" />
          </div>

          <div className="relative min-w-0 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:before:absolute lg:before:inset-y-0 lg:before:-left-[15px] lg:before:w-px lg:before:bg-[#b0aeae]">
            <Sidebar {...sidebar} />
          </div>

          <div className="flex min-w-0 flex-col gap-2">
            <CampaignCard {...recruit} />
            <Divider className="my-3" />
            <CampaignCard {...subscribe} imageClassName="aspect-[195/158]" />
            <Divider className="my-3" />
            <OverlayArticle
              {...leftColumn.studentPolitics}
              titleClassName="text-[26px]"
              className="pt-2"
            />
            <Divider className="my-3" />
            <OverlayArticle
              {...leftColumn.worldwideSocialism}
              tone="dark"
              imageClassName="aspect-[2/2.12]"
              titleClassName="text-[29px]"
            />
          </div>

          <div className="relative flex min-w-0 flex-col gap-2 lg:before:absolute lg:before:inset-y-0 lg:before:-left-[15px] lg:before:w-px lg:before:bg-[#b0aeae]">
            <ArticleFeature
              article={centerColumn.gramsci}
              layout="split-row"
              imageClassName="aspect-[780/433]"
            />
            <Divider className="my-3" />
            <ArticleFeature
              article={centerColumn.electionBulletin}
              layout="split"
              imageClassName="aspect-[133/93]"
            />
            <Divider className="my-3" />
            <div className="grid gap-2.5 sm:grid-cols-2">
              {centerColumn.analysisRow.map((article, index) => (
                <div
                  key={article.href}
                  className={
                    index < centerColumn.analysisRow.length - 1
                      ? 'sm:border-r sm:border-[#b0aeae] sm:pr-2.5'
                      : ''
                  }
                >
                  <ArticleFeature article={article} imageClassName="" />
                </div>
              ))}
            </div>
            <Divider className="my-3" />
            <OverlayArticle
              {...centerColumn.unitedFront}
              imageClassName="aspect-[40/21]"
              titleClassName="max-w-[623px] text-[31px]"
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
  )
}
