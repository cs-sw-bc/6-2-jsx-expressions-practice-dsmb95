# 📚 Library Patron Dashboard - Assignment

## Your Task
Build a Library Patron Dashboard using the provided data object. Practice **JSX Expressions**, **Conditional Rendering**, and **List Rendering (.map())**.

## Create your project


1. Use commands from the previous class
```
npm create vite@latest
```
2. Create a components folder to drop in your new components. Refer to today's classwork as reference for any structure/logic related questions
---

## The Data Object

```javascript
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
```

---

## Requirements

### Part 1: JSX Expressions
Use variables, calculations, object properties, string methods, and template literals:

- Display patron's full name
- Show library card number
- Display email (in lowercase)
- Calculate years as member (current year - memberSince)
- Show total books checked out (.length)
- Calculate books remaining to reach goal (readingGoal - booksReadThisYear)
- Display favorite genres as a comma-separated string (.join())

### Part 2: Conditional Rendering
Use ternary operators, &&, and conditional styling:

- Show "✅ Active Member" or "❌ Inactive" badge based on isActive
- Display late fee warning only if hasLateFees is true
- Show late fee amount with red color if hasLateFees
- Display "🎯 Goal Reached!" if booksReadThisYear >= readingGoal
- Show different colors for progress bar based on reading progress
- Add "⚠️ OVERDUE" badge to overdue books

### Part 3: List Rendering
Use .map() and .filter():

- Display all checked out books with title, author, and due date
- Show overdue books count
- Filter and display only overdue books in a separate section
- Filter and display only Fiction category books
- Map through favoriteGenres and display as badges

---

## Design Ideas

You can design it however you want! Here are some suggestions:

### Option 1: Simple Card Layout
```
┌─────────────────────────────┐
│  Patron Info                │
│  Name, Email, Card#         │
└─────────────────────────────┘
┌─────────────────────────────┐
│  Reading Progress           │
│  24/30 books [Progress Bar] │
└─────────────────────────────┘
┌─────────────────────────────┐
│  Checked Out Books          │
│  • Book 1                   │
│  • Book 2                   │
└─────────────────────────────┘
```

### Option 2: Dashboard with Sections
- Header with patron name and status
- Stats section (books read, overdue count, fees)
- Books list with filters
- Alerts section (overdue books, late fees)

### Option 3: Table View
- Patron info at top
- Books displayed in a table
- Color-coded rows (overdue = red, on-time = green)

---

## Bonus Challenges

1. **Calculate overdue count** - Count how many books are overdue
2. **Progress percentage** - Calculate reading goal percentage
3. **Sort books** - Display books sorted by due date
4. **Category filters** - Show books grouped by category
5. **Search functionality** - Filter books by title (stretch goal with useState)

---

## Getting Started

1. Create a new component file: `LibraryDashboard.jsx`
2. Copy the patron object into your component
3. Start building! Begin with Part 1 (Expressions), then Part 2 (Conditionals), then Part 3 (Lists)
4. Style it however you like using inline styles or CSS

---

## What You're Practicing

✅ JSX Expressions with `{}`  
✅ Template literals  
✅ Object properties and methods  
✅ Ternary operators `? :`  
✅ Logical AND `&&`  
✅ Conditional styling  
✅ `.map()` for rendering lists  
✅ `.filter()` for filtering data  
✅ `.length` for counting  
✅ `key` prop in lists  

---

## Submission

When complete, your dashboard should:
- Display all patron information clearly
- Show all books with proper formatting
- Use conditional rendering for badges and warnings
- Have at least one filtered list (e.g., overdue books only)
- Look organized and easy to read

**Have fun and be creative!** 🎨📚
