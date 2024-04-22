---
layout: post
title:  "Game of Life"
date:   2023-06-09 12:52:00 +0630
categories: howto
---

## Ref

https://rustwasm.github.io/docs/book/game-of-life/rules.html

## Chat GPT Answers

there is a game that strating with random points on x,y coordinate, and then populate next state by some rule
ChatGPT
Certainly! The game you're referring to sounds like a cellular automaton. Cellular automata are mathematical models that consist of a grid of cells, each of which can be in a particular state. The states of the cells evolve over time based on predefined rules.

One famous cellular automaton is Conway's Game of Life. In this game, the grid is a two-dimensional plane, and each cell can be in one of two states: alive or dead. The next state of each cell is determined by the following rules:

Any live cell with fewer than two live neighbors dies (underpopulation).
Any live cell with two or three live neighbors survives.
Any live cell with more than three live neighbors dies (overpopulation).
Any dead cell with exactly three live neighbors becomes alive (reproduction).
These rules are applied simultaneously to all cells in the grid, and the process is repeated for each time step to generate a new state. The initial configuration of live and dead cells is usually random or specified by the user.

Other variations of cellular automata can have different rules and grid configurations. Some examples include the Forest Fire model, the Brian's Brain model, and the Langton's Ant model.

Cellular automata can exhibit complex behaviors and patterns emerging from simple rules. They are often studied for their applications in various fields such as computer science, physics, and biology.
