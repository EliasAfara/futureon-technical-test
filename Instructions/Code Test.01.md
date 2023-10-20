
# FutureOn Code Test

## Table Of Content

- [FutureOn Code Test](#futureon-code-test)
  - [Table Of Content](#table-of-content)
  - [Description](#description)
  - [Input](#input)
  - [Language](#language)
  - [API Information](#api-information)
  - [Visualisation](#visualisation)
  - [PS](#ps)

## Description

Our software is a subsea field design tool. It allows engineers to easily create different possible scenarios for a given field.
It also allows engineers to add meta data to any items.
The whole field as well as a the meta data can then be queried using our API.
To simplify, a field is an interconnected graph of different items. The main elements of the graph are what we call "staged assets" which are representations of actual hardware, and "connections" which are representations of tubes and connections between "staged assets".
For this test, we are asking you to:

1. Use our REST API to retrieve a field.
2. Walk this field to generate a graph representation of staged assets and connections. ( graph representation in code, not graphically, except if you feel like doing it ).
3. Use this graph to display all the possible paths, starting from a given staged asset. The list should be displayed as text, each line a different path, each element of the path represented by the element id, followed by ` > `. So for example :

> -MA1551S-odms4rVbJ8K > -MA1551S-odms4rVbJ8n > -MA1551S-odms4rVbJ8E > etc.

## Input

For point 3. you can either take the ID of the starting staged asset as a command line argument, or just use this ID : `-MA1551S-odms4rVbJ8K`

## Language

To create this code, we are asking you to use `javascript` or `typescript`. It can be done either with nodejs or using a HTML+Javascript page in a browser

## API Information

|                   |                                                                                   |
| :---------------- | :-------------------------------------------------------------------------------- |
| API documentation | [API Documentation](https://api.fieldtwin.com/#api-SubProjects-GetSubProject) |
| Endpoint          | `https://backend.qa.fieldtwin.com/`                                               |
| API token         | `10941392-a080-44c4-8cf2-a97011bc6b81`                                            |
| project id        | `-MA1551S-odms4rVbJ8A`                                                            |
| sub project id    | `-MA1551S-odms4rVbJ8B`                                                            |

## Visualisation

You can view the project using this link : [View Link](https://master-presenter.futureon-qa.fieldtwin.com/-MIIeS15P3gFMIAd8cBC)

## PS

If you have any questions, do not hesitate to contact me at [olivier@futureon.com](olivier@futureon.com). You are not obliged to do everything, just stop when you feel like it and send me the source code.
