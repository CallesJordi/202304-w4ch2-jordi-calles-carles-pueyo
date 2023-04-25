DATA LAYER

- Data

  - A collection of characters ---> CharactersStructure
  - Each character: <--- object with interface CharactersStructure
    - name
    - picture
    - weight
    - mass
    - creation date

- Components
  - App
    - State: the collection of characters
    - Load list of characters
  - Button
    - Receives a prop with the text
    - Receives a prop with the action
  - Character
    - Receives a prop with a Character
    - Receives a prop with the action on click that deletes it.
