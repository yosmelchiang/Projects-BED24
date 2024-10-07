An algorithm is a step-by-step set of operations tat are to be performed.

Terms
- Initialize: initial value
- Prompt: prompting for input
- Display: printing an output

Sample

- Initialize billAmount to 0
- Initialize tip to 0
- Initialize tipRate to 0
- Initialize total to 0

- Prompt for billAmount with a string asking for a whole digit
- Prompt for tipRate with a string asking for a whole digit

- Convert billAmount to a number
- Convert tipRate to a number

- tip = billAmount * (tipRate / 100)
- round up to nearest cent 
- total = billAmount + tip

- Display = "Tip: $" + tip
- Display = "Total: $" + total

Constraints
- Tip should be entered as a percentage and not decimal
  - 15 and not 0.15
  - We handle the division in code
  - 