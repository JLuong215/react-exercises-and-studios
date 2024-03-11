export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://i5.walmartimages.com/seo/The-Inheritance-Cycle-Eragon-Book-I-Paperback-9780375826696_05ee371c-2f2e-4348-97bb-b4bfc1751890.fdeb59cd071183a06ba0a73b62b32390.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF";
   let book2 = "https://m.media-amazon.com/images/I/71mLyoIkGXL._SL1200_.jpg";
   let book3 = "https://www.mvtimes.com/mvt/uploads/2023/03/magic-school-bus-e1680113118735.jpg?x76679";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Eragon" width="200" height="200" />
         <img src={book2} alt="Magic Tree House" width="200" height="200"/>
         <img src={book3} alt="Magic School Bus" width="200" height="200"/>
      </div>      
   );
}