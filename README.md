# Calculator & ToDo List - Web Programming Lab

A modular React application featuring a standard calculator and a persistent to-do list, built with Vite, React, and Material UI.

## Project Overview

This project demonstrates fundamental web programming concepts through two practical tools:
- **Standard Calculator**: Performs basic arithmetic operations (add, subtract, multiply, divide)
- **ToDo List**: Task management with local persistence using browser localStorage

## Key JavaScript Concepts

### Array Methods
- `Array.map()` - Transform array elements in both hooks
- `Array.filter()` - Remove tasks by filtering out matching IDs
- `Array.some()` - Check if expression contains operators
- `Array.find()` - Locate operator in expression string

### String Manipulation
- `String.slice()` - Extract portions of expressions for parsing
- `String.includes()` - Check for decimal points and operators
- `String.trim()` - Clean user input before saving
- Template literals for dynamic string construction

### Modern JavaScript Features
- **Arrow Functions**: Concise syntax for callbacks and helper functions
- **Destructuring**: Extract values from arrays and objects
- **Default Parameters**: Initialize state with lazy evaluation
- **Spread Operator**: Clone task objects with additional properties

### Control Flow
- **Conditional Operators**: Ternary operators for inline logic
- **Early Returns**: Exit functions when validation fails

## Key React Concepts

### Functional Components
All components are written as pure functional components using JSX syntax for declarative UI rendering.

### State Management with useState
```javascript
const [display, setDisplay] = useState('0')
const [expression, setExpression] = useState('')
```
- **useState**: Manages local component state for calculator display and todo tasks
- **Lazy Initialization**: `useState(() => readTasks())` delays expensive operations until first render

### Side Effects with useEffect
```javascript
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}, [tasks])
```
- **useEffect**: Handles localStorage synchronization when tasks change
- **Cleanup**: Guards against SSR by checking `typeof window`

### Performance Optimization with useMemo
```javascript
const displayTasks = useMemo(
  () => tasks.map((task) => ({ ...task, createdAtLabel: formatDate(task.createdAt) })),
  [tasks],
)
```
- **useMemo**: Memoizes derived data to prevent unnecessary recalculations
- **Dependencies**: Array ensures memoization updates when source data changes

### Custom Hooks (Separation of Concerns)
- `useCalculator()`: Encapsulates all calculator business logic
- `useTodoList()`: Encapsulates todo list state and persistence logic
- Both hooks return an interface object, keeping components clean

### Routing with React Router
```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/todo" element={<TodoList />} />
  </Routes>
</BrowserRouter>
```
- **React Router**: Enables navigation between homepage and tools
- **BrowserRouter**: Provides routing context for the entire application

### JSX & Component Composition
- **Components**: Modular, reusable UI pieces (CalculatorDisplay, CalculatorPad, TodoListItems)
- **Props**: Data passing from parent to child components
- **Conditional Rendering**: Display empty state when no tasks exist

## Material UI (MUI) Concepts

### Theme Configuration
- Custom theme in `src/theme/appTheme.js` with consistent color palette and typography
- `ThemeProvider` wraps the application for consistent styling
- `CssBaseline` provides normalized CSS reset

### Component Library
- **Paper**: Elevated containers for tool panels
- **Stack**: Flexbox-based layout for consistent spacing
- **Button**: Interactive elements with variants (contained, outlined, text)
- **TextField**: Input for todo tasks with validation
- **IconButton**: Add and delete actions with Material icons

## Project Structure

```
src/
├── components/
│   ├── Calculator/
│   │   ├── Calculator.jsx       # Calculator page with back button
│   │   ├── CalculatorDisplay.jsx # Output display component
│   │   └── CalculatorPad.jsx     # Numeric and operator buttons
│   ├── TodoList/
│   │   ├── TodoList.jsx          # Todo page with back button
│   │   └── TodoListItems.jsx     # Task list display component
│   └── Home/
│       └── Home.jsx              # Homepage with navigation buttons
├── hooks/
│   ├── useCalculator.js          # Calculator business logic
│   └── useTodoList.js            # Todo list with localStorage
├── theme/
│   └── appTheme.js               # MUI theme configuration
├── App.jsx                       # Route definitions
├── main.jsx                      # Entry point with providers
├── App.css                       # Component styles
└── index.css                     # Global styles
```

## How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Author

**Erik Herrera**

## License

MIT