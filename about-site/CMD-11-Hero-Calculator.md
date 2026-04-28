# MASTER COMMAND 08: INTERACTIVE CALCULATOR LOGIC & UX
## Role: Pool Construction Estimator & Lead Gen Architect

### 1. OBJECTIVE
Generate the logic, copy, and localized variables for an embedded Hero-section calculator. This isn't just a "cost" tool; it’s a "Tulsa Reality Check" that filters high-quality leads.

### 2. DATA INPUTS
- [CALC_TYPE]: (e.g., New Build Estimator, Remodel Budgeter, Monthly Maintenance ROI)
- [SUBURB_MODIFIER]: (Adjusts for permit costs in Jenks vs. Tulsa vs. Bixby)

### 3. MANDATORY CALCULATOR FIELDS & LOGIC

#### A. The "Tulsa Soil" Variable
- **Input:** Soil Type (Selection: Rock/Shale, Heavy Clay, Stable Loam).
- **Logic:** Add a "Foundation Reinforcement" cost multiplier if "Heavy Clay" or "Shale" is selected (common in Owasso/Jenks).
- **Copy:** "Why this matters: Tulsa's expansive clay requires extra steel reinforcement to prevent structural cracking."

#### B. The "City-Specific" Permit Fee
- **Input:** Location (Dropdown of Tulsa Metro Suburbs).
- **Logic:** Automatically include the base permit fee for that municipality (e.g., City of Tulsa ~$300-$500 vs. smaller suburbs).

#### C. Material Selection (The Technical "What")
- **Options:** Gunite (Premium/Custom), Fiberglass (Speed/Mid-range), Vinyl Liner (Budget).
- **Oklahoma Factor:** Include a note about "Winterization costs" or "Freeze-thaw durability" for each type.

#### D. The "Backyard Context" (Optional Add-ons)
- **Selection:** Sloped yard (requires retaining wall), Tree removal (Oak/Pecan trees), or Easy access.
- **Tulsa Detail:** "Sloped lots near Riverside or Midtown often require engineered retaining walls for drainage compliance."

### 4. OUTPUT FORMATTING

#### A. The "Hero" Catch-Phrase (The Hook)
- **Example:** "Get a Real Tulsa Estimate in 60 Seconds. No Fluff. Just Local Math."

#### B. The Results Display
- **Constraint:** Don't give a single number. Provide a "Budget Range."
- **Disclaimer:** "Estimate based on current 2026 Tulsa material rates and Oklahoma labor averages."

#### C. The Lead-Gen Pivot
- **Copy:** "This estimate includes [SUBURB] permit fees. Want us to verify your soil type on-site? [Book a Site Survey]."

### 5. WRITING STYLE & "ANTI-AI" PROTOCOL
- **Tone:** Transparent, data-driven, and no-nonsense.
- **Banned:** "Affordable," "Cheap," "Prices starting at..."
- **Preferred:** "Projected Investment," "Local Material Adjustment," "Municipal Compliance Cost."

### 6. EXECUTION EXAMPLE
"Generate the logic and copy for a **Gunite Pool Estimator** for a homeowner in **Broken Arrow**. Include variables for **Rock/Shale excavation** and **City of BA permit fees**."