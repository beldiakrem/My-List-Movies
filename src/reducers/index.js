
import {ADD, SEARCH, RATING, EDIT, REMOVE} from "../const/actionType"
import {v1 as uuid} from "uuid";

const initState = {
 cards : [
  { 
          Image:"http://fr.web.img3.acsta.net/pictures/19/04/19/09/29/4029006.jpg",
        Title:"Aladdin",
        Released:"8 mai 2019",
        Runtime:"129 min",
        Rating:4,
        description:"Aladdin, un jeune homme des rues au cœur pur vivant dans le royaume d'Agrabah, en plein milieu du désert, sauve et devient ami avec la princesse Jasmine, qui s'est échappée de son palais pour explorer la ville, fatiguée de la vie qu'elle mène.  Pendant ce temps, Jafar, le Grand vizir, souhaite remplacer le père de Jasmine en tant que sultan. Il cherche une lampe magique cachée dans la Caverne aux Merveilles qui lui permettrait d'exaucer ses souhaits. Seule une personne peut y entrer, un diamant d'innocence, qui se révèle être Aladdin. Ce dernier est capturé par Jafar, qui le persuade de récupérer la lampe. Dans la Caverne, Aladdin trouve un tapis volant et trouve la lampe. Il la donne à Jafar, qui le trahit et le jette dans la caverne.",
        Video:"https://www.youtube.com/embed/IrzzGm3AmLg",
        id:uuid(),
      },
        {    
          Image:" https://e.snmc.io/i/300/w/cca26841985a30f02142aaee0db10d76/6772748",
        Title:"Bad Ginus",
        Released:"3 mai 2017",
        Runtime:"139 min",
        Rating:3,
        description:"Bad Genius, known in Thai as Chalard Games Goeng (ฉลาดเกมส์โกง),[a] is a 2017 Thai heist thriller film produced by Jor Kwang Films and distributed by GDH 559. It was directed by Nattawut Poonpiriya, and stars Chutimon Chuengcharoensukying in her feature film debut as Lynn, a straight-A student who devises an exams-cheating scheme which eventually rises to international levels.Inspired by real-life news of students cheating on the SAT, the film transplants the heist structure to a school-exams setting, and features themes of class inequality as well as teenage social issues. The young main cast consists of relative newcomers Chanon Santinatornkul, Teeradon Supapunpinyo and Eisaya Hosuwan as Lynn's classmates Bank, Pat and Grace, while Thaneth Warakulnukroh plays Lynn's father. Filming took place on location in Thailand and Australia.",
        Video:"https://www.youtube.com/embed/CLdhN4oMxCQ",
        id:uuid(),
      },
    {
      Image:" https://specials-images.forbesimg.com/imageserve/5d6a0922fead28000892b2b7/960x0.jpg?fit=scale",
        Title:"Joker",
        Released:"2 octobre 2019",
        Runtime:"125 min",
        Rating:5,
        description:"Joker est un thriller psychologique américain, coécrit et réalisé par Todd Phillips, sorti en 2019.Il raconte, dans une histoire originale, la transformation d'Arthur Fleck en Joker, un dangereux tueur psychopathe qui deviendra, par la suite, le plus grand ennemi de Batman.Véritable triomphe au box-office mondial (plus d'un milliard de dollars de recettes) et bénéficiant de critiques élogieuses, il crée toutefois une polémique, notamment aux États-Unis, du fait de reproches d’apologie de la violence, laquelle demeure contestée par le réalisateur.Le film est présenté en compétition officielle à la Mostra de Venise 2019 où il reçoit le Lion d'or et est ovationné. Il est ensuite nommé près d'une trentaine de fois pour différentes catégories de récompenses (Oscars, Golden Globes, British Academy Film Awards, César du meilleur film étranger, etc.).",
        Video:"https://www.youtube.com/embed/OoTx1cYC5u8",
        id:uuid(),
      }
  ],
  rating : 0,
  search : ""
}

  const reducer=(state=initState, action)=> {
       switch (action.type){
           case ADD:
               return {...state, cards: state.cards.concat(action.payload)}
           case SEARCH:
             return {...state, search: action.payload}
           case RATING:  
           return {...state, rating: action.payload}
           case EDIT:
              return {...state,cards: state.cards.map(e=> e.id === action.id ? action.payload :e) }
              case  REMOVE:
              return {...state,cards: state.cards.filter(e=> e.id !== action.payload) }
        default:         
          return state 
       }
      
  }
  export default reducer