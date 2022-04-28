import Header from '~/components/organisms/Header';
import ImageScroller from '~/components/organisms/ImageScroller';
import Article from '~/components/organisms/Article';

function Index() {
  return (
    <>
      <Header />
      <main>
        <ImageScroller />
        <Article
          title="fall limited edition sneakers"
          desc="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
          price={250}
          discount={50}
        />
      </main>
    </>
  );
}

export default Index;
