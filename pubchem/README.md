# What is PubChem?

## PubChem is the world's largest collection of freely accessible chemical information.

###  Search chemicals by name, molecular formula, structure, and other identifiers.

The short term goal will be to include an interface to the [PubChem](https://pubchem.ncbi.nlm.nih.gov/) database to search for compounds.

For example, we can search for fructose:

https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/fructose/property/MolecularFormula,SMILES/XML

which returns the following XML:

```xml
<PropertyTable xmlns="http://pubchem.ncbi.nlm.nih.gov/pug_rest" xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" xs:schemaLocation="http://pubchem.ncbi.nlm.nih.gov/pug_rest https://pubchem.ncbi.nlm.nih.gov/pug_rest/pug_rest.xsd">
  <Properties>
    <CID>2723872</CID>
    <MolecularFormula>C6H12O6</MolecularFormula>
    <SMILES>C1[C@H]([C@H]([C@@H](C(O1)(CO)O)O)O)O</SMILES>
  </Properties>
</PropertyTable>
```

Then extract the SMILES formula for presentation with smilesDrawer.
