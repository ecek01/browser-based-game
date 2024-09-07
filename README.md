## Game Logo

<img src="https://github.com/ecek01/browser-based-game/blob/main/logo.jpg?raw=true" alt="Colorful, sparkly, tree" width="300">

# Enchanted Forest - Browser-Based Game

## **Description**

<p>This project is a browser-based game where the player explores an enchanted forest. The player must make choices that affect the outcome of the story, which can lead to different endings (good, bad, or neutral). The game was developed as part of a coding bootcamp to showcase skills in HTML, CSS, and JavaScript.</p>

## **Deployment link**

<p><a href="https://github.com/ecek01/browser-based-game">Browser-Based-Game GitHub Repository</a></p>

## **Getting Started/Code Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/browser-based-game.git
   ```

2. Navigate into the project folder:
   ```bash
   cd browser-based-game
   ```

3. Open the `index.html` file in your browser to start the game.

## **Timeframe & Working Team**

- **Timeframe**: 2 weeks
- **Team**: Solo project

## **Technologies Used**

- **Front End**: HTML, CSS, JavaScript
- **Tools**: Git, GitHub

## **Brief**

<p>Build an interactive story-based browser game using JavaScript, HTML, and CSS. The player will make decisions throughout the story, which will lead to different endings. The game must be responsive and user-friendly.</p>

## **Planning**

- Initial wireframe sketches were done on Procreate to have an idea of how the final game was meant to look.
- The game logic was planned using flowcharts, mapping each possible decision and outcome.
- All story paths were plotted before beginning development on GoogleDocs.
- Before beginning the coding process, pseudocode was used to have a to-do list of what needed to be implemented.
- [Project planning material](https://docs.google.com/document/d/1HUWo0tOvilCdgxLso2kqSK2wTn_cPvi7fL--Z7u0CZQ/edit?usp=sharing)

## **Build/Code Process**

1. **Story Path Development**: The first step was writing the storyline and outlining decision points that would affect the outcome.

2. **Game Flow**: Developed the game structure, ensuring each page (`light.html`, `tree.html`, `ruins.html`, etc.) linked correctly based on player decisions.

3. **JavaScript Logic**: Used `localStorage` to store player choices and guide them to the appropriate ending based on their decisions.

4. **Interactive Elements**: Buttons were added for each decision the player could make. Event listeners were attached to the buttons to store player choices and navigate through the game.

5. **Endings**: The game checks player decisions and leads them to one of three endings: good, bad, or neutral.

## **Attributions**

- [Handjet Font](https://fonts.google.com/specimen/Handjet) from Google Fonts.

## **Challenges**

<p>Implementing game flow to ensure all decisions correctly led to the appropriate page. Managing state persistence through <code>localStorage</code>. Resolving CSS layout issues for different screen sizes to make the game responsive.</p>

## **Wins**

<p>Successfully creating a multi-path storyline with distinct endings. Implementing smooth navigation between decision points. Using <code>localStorage</code> to track player progress and dynamically adjust the story path.</p>

## **Key Learnings/Takeaways**

<p>Improved confidence with JavaScript’s <code>localStorage</code> for saving game states. Learned how to plan and structure a multi-step, decision-based game. Enhanced skills in DOM manipulation and event-driven programming.</p>

## **Bugs**

<p>Occasionally, the decision state does not persist if the player refreshes the browser on certain screens.</p>

## **Future Improvements**

<ul>
  <li>Add sound effects and background music to enhance the player's experience.</li>
  <li>Implement animations for smoother transitions between story stages.</li>
  <li>Improve mobile responsiveness.</li>
</ul>

