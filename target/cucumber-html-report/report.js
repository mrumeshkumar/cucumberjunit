$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/cucumber/calc/Calc.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "calculate add",
  "description": "",
  "id": "calculator;calculate-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I ask it to say add",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "it should answer with add 15",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CalculatoeStepDefs.I_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 150489900,
  "status": "passed"
});
formatter.match({
  "location": "CalculatoeStepDefs.I_ask_it_to_say_add()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "CalculatoeStepDefs.it_should_answer_with_add(int)"
});
formatter.result({
  "duration": 2248800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "calculate subtract",
  "description": "",
  "id": "calculator;calculate-subtract",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I ask it to say subtract",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it should answer with sub 9",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CalculatoeStepDefs.I_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 163200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatoeStepDefs.I_ask_it_to_say_subtract()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 26
    }
  ],
  "location": "CalculatoeStepDefs.it_should_answer_with_sub(int)"
});
formatter.result({
  "duration": 96200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "calculate multiply",
  "description": "",
  "id": "calculator;calculate-multiply",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I ask it to say multiply",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "it should answer with mul 36",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CalculatoeStepDefs.I_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 152900,
  "status": "passed"
});
formatter.match({
  "location": "CalculatoeStepDefs.I_ask_it_to_say_multiply()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 26
    }
  ],
  "location": "CalculatoeStepDefs.it_should_answer_with_mul(int)"
});
formatter.result({
  "duration": 90400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "calculate divide",
  "description": "",
  "id": "calculator;calculate-divide",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I ask it to say divide",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "it should answer with div 4",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CalculatoeStepDefs.I_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 157800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatoeStepDefs.I_ask_it_to_say_divide()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "CalculatoeStepDefs.it_should_answer_with_div(int)"
});
formatter.result({
  "duration": 101400,
  "status": "passed"
});
});