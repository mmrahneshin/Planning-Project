# Planning Project

This project implements various AI planning algorithms and domains, focusing on heuristic and search-based planning. It includes the following components:

## Domains
- **BlocksWorld.js**: Models a classic blocks world domain for testing planning algorithms.
- **DinnerDate.js**: Represents a domain for planning dinner date scenarios.
- **LinkRepeat.js**: Manages planning tasks involving repeated link patterns.
- **MonkeyAndBananas.js**: Implements the monkey and bananas problem as a planning domain.
- **SpareTire.js**: Represents a spare tire replacement scenario.

## Core Components
- **Action.js**: Defines the actions available in planning tasks.
- **State.js**: Models the state representation for planning.

## Planner
### Heuristic Strategies
- **IgnoreDeleteLists.js**: Implements a heuristic that ignores delete effects.
- **IgnorePrecondition.js**: Implements a heuristic ignoring preconditions.

### Search Strategies
- **BackwardSearch.js**: Implements backward search for goal-directed planning.
- **ForwardSearch.js**: Implements forward search for state-space exploration.
- **ForwardSearchWithHDel.js**: Combines forward search with the ignore-delete heuristic.
- **ForwardSearchWithHPre.js**: Combines forward search with the ignore-precondition heuristic.

## Main File
- **Main.js**: Serves as the entry point for executing planning algorithms.

This project is organized for extensibility, making it easy to add new domains or planning techniques.

