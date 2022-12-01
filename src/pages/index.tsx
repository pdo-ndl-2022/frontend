import { ElementGroupPreview } from "../components/element-group-preview";
import { Jumbotron } from "../components/jumbotron.component";
import { PageSection } from "../components/page-section.component";
import { SearchBar } from "../components/search-bar.component";
import { SidoSwiper } from "../components/slider.component";
import { PageLayout } from "../layouts/page.layout";

export default function Home() {
  return (
    <PageLayout>
      <PageSection>
        <Jumbotron />
      </PageSection>
      <PageSection>
        <SearchBar />
      </PageSection>
      <PageSection>
        <ElementGroupPreview />
      </PageSection>
      <PageSection>
        <SidoSwiper />
      </PageSection>
      <PageSection>
        <ElementGroupPreview />
      </PageSection>
    </PageLayout>
  );
}
