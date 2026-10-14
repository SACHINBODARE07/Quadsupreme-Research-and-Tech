import Article from "@/components/pages/article-page"
import { SiteShell } from "@/components/site/site-shell"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <SiteShell><Article slug={slug} /></SiteShell>
}
