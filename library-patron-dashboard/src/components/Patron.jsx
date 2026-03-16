export function Patron() {
const patron = {
  firstName: "Emma",
  lastName: "Johnson",
  libraryCardNumber: "LIB-98765",
  email: "emma.johnson@email.com",
  memberSince: 2019,
  isActive: true,
  hasLateFees: true,
  lateFeeAmount: 3.50,
  booksCheckedOut: [
    { 
      id: 1, 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      dueDate: "March 10, 2024",
      isOverdue: true,
      category: "Fiction"
    },
    { 
      id: 2, 
      title: "Sapiens", 
      author: "Yuval Noah Harari", 
      dueDate: "March 18, 2024",
      isOverdue: false,
      category: "Non-Fiction"
    },
    { 
      id: 3, 
      title: "1984", 
      author: "George Orwell", 
      dueDate: "March 12, 2024",
      isOverdue: true,
      category: "Fiction"
    },
    { 
      id: 4, 
      title: "Educated", 
      author: "Tara Westover", 
      dueDate: "March 20, 2024",
      isOverdue: false,
      category: "Biography"
    }
  ],
  favoriteGenres: ["Fiction", "History", "Biography"],
  booksReadThisYear: 24,
  readingGoal: 30
};

return(
    <article style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
          gap: "20px",
          marginBottom: "40px", 
        }}>
        
         <div style={{ 
            border: "2px solid #ddd", 
            padding: "15px", 
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "black"
          }}>
            
            <h3 style={{ color: "black" }}> {patron.firstName} {patron.lastName}</h3>
            <div style={{ backgroundColor: "yellow", padding:"20px", fontSize:"15px"}}>
            <p> Card No.: { patron.libraryCardNumber } </p>
            <p> { patron.email.toLowerCase() } </p>
            </div>
            <div style={{ fontSize:"12px"}}>
            <p> <b>Years as member:</b> { 2026 - patron.memberSince } </p>
            <p> <b>No. of Books Checked Out:</b> { patron.booksCheckedOut.length } </p>
            <p> <b>No. of books remaining to reach goal:</b> { patron.readingGoal - patron.booksReadThisYear }</p>
            <p> Favorite genres: { patron.favoriteGenres.join(', ')} </p>
            <p>{ patron.isActive ? "✅ Active Member" : "❌ Inactive"}</p>
            <p> { patron.hasLateFees ? "WARNING: You have late fees!" : "No late fees."}</p>
            <p style={{color:"red", fontWeight:"bold"}}> Late Fee Amount: ${ patron.hasLateFees ? patron.lateFeeAmount : "No late fees" }</p>
            <p>Reading goal: { patron.booksReadThisYear >= patron.readingGoal ? "🎯 Goal Reached!" : "You need to read more books!"}</p>
            { patron.booksCheckedOut.filter(book => book.isOverdue === true ).
            map(book => (
                <p>⚠️ OVERDUE: { book.title }</p>
            ))}
            </div>
        </div>
    
    </article>
)};