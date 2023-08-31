import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as V}from"./rmg-fields-b81777e1.js";import{r as t}from"./index-61bf1805.js";import"./index-f591d24a.js";import{A as k,a as D}from"./chunk-XEKRR764-0cdbadea.js";import{R as O}from"./rmg-button-group-d54294e8.js";import{R as G}from"./rmg-multi-line-string-05ecb1a2.js";import{F as N}from"./chunk-KRPLQIP4-7a7d7866.js";import{B as b}from"./chunk-PULVB27S-dfb23afe.js";import{T as l}from"./chunk-2OOHT3W5-423ffe97.js";import{B as P}from"./chunk-UVUR7MCU-7fc2c9bf.js";import"./rmg-label-d74ad164.js";import"./chunk-XRMX4GAI-a9941989.js";import"./index-6830816b.js";import"./index-c23131f5.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./rmg-debounced-input-e0253478.js";import"./chunk-QJA5SDDN-70753de7.js";import"./rmg-select-86f9cafd.js";import"./rmg-throttled-slider-796ae003.js";import"./index-dcfef637.js";import"./index-a7f40554.js";import"./chunk-6QYXN73V-1abba381.js";import"./chunk-7D6N5TE5-7847f1c7.js";import"./index-e73c685f.js";import"./chunk-DEQZ7DVA-08ba7ba3.js";import"./chunk-2GBDXOMA-4314ad61.js";import"./emotion-react.browser.esm-3572b68e.js";const he={title:"RmgFields",component:V},f=()=>{const[n,p]=t.useState(""),[a,m]=t.useState(""),[i,r]=t.useState(""),[o,u]=t.useState("en"),[c,x]=t.useState(5),[s,g]=t.useState(5),[d,v]=t.useState(""),[w,C]=t.useState(!1),[T,E]=t.useState("black"),R=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:n,onChange:p},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:n,validator:S=>!isNaN(Number(S)),onChange:m},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:i,onChange:r},{type:"select",label:"Select field with optgroup",options:{"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}},value:o,onChange:u},{type:"slider",label:"Integer slider field",value:c,min:0,max:10,onChange:x},{type:"slider",label:"Slider field",value:s,min:0,max:10,step:.1,onChange:g,leftIcon:e.jsx(k,{}),rightIcon:e.jsx(D,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:d,onChange:v,minW:"full"},{type:"switch",label:"Switch field",isChecked:w,onChange:C,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"},{type:"custom",label:"Foreground colour",component:e.jsx(O,{selections:[{value:"black",label:"Black"},{value:"white",label:"White"}],defaultValue:T,onChange:S=>E(S)})}],W=()=>{p(""),m(""),r(""),u("en"),x(5),g(5),v(""),C(!1),E("black")};return e.jsxs(N,{children:[e.jsx(b,{w:320,children:e.jsx(V,{fields:R,minW:100})}),e.jsxs(b,{children:[e.jsxs(l,{children:["Debounced input field: ",n]}),e.jsxs(l,{children:["Debounced number field: ",a]}),e.jsxs(l,{children:["Select field: ",i]}),e.jsxs(l,{children:["Select with group field: ",o]}),e.jsxs(l,{children:["Integer slider field: ",c]}),e.jsxs(l,{children:["Slider field: ",s]}),e.jsxs(l,{children:["Debounced multiline field: ",e.jsx(G,{text:d,delimiter:`
`})]}),e.jsxs(l,{children:["Switch field: ",w.toString()]}),e.jsx(l,{children:"Disabled switch field: false"}),e.jsxs(l,{children:["Button group field: ",T]}),e.jsx(P,{onClick:()=>W(),children:"Reset all"})]})]})},h=()=>{const[n,p]=t.useState(0),[a,m]=t.useState(0),[i,r]=t.useState(!1),[o,u]=t.useState(!1);t.useEffect(()=>{r(!1),n&&a&&n>a&&u(!0)},[n]),t.useEffect(()=>{u(!1),n&&a&&n>a&&r(!0)},[a]);const c=Array(10).fill(0).reduce((s,g,d)=>({...s,[d+1]:(d+1).toString()}),{0:"Please select..."}),x=[{type:"select",label:"Min",value:n,options:c,disabledOptions:[0],onChange:s=>p(s),isInvalid:i},{type:"select",label:"Max",value:a,options:c,disabledOptions:[0],onChange:s=>m(s),isInvalid:o}];return e.jsxs(b,{w:320,children:[e.jsx(l,{children:"Please select a range"}),e.jsx(V,{fields:x}),e.jsxs(l,{children:["Your range: ",n&&a&&!i&&!o?`from ${n} to ${a}`:"invalid"]})]})};var y,j,I;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectWithGroupValue, setSelectWithGroupValue] = useState('en');
  const [intSliderValue, setIntSliderValue] = useState(5);
  const [sliderValue, setSliderValue] = useState(5);
  const [textareaValue, setTextareaValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [fg, setFg] = useState('black');
  const fields: RmgFieldsField<string>[] = [{
    type: 'input',
    label: 'Debounced input field',
    placeholder: 'Enter text',
    value: inputValue,
    onChange: setInputValue
  }, {
    type: 'input',
    label: 'Debounced number field',
    placeholder: 'Enter number',
    value: inputValue,
    validator: value => !isNaN(Number(value)),
    onChange: setNumberValue
  }, {
    type: 'select',
    label: 'Select field',
    options: {
      '': 'Please select...',
      opt1: 'Option 1',
      opt2: 'Option 2'
    },
    disabledOptions: [''],
    value: selectValue,
    onChange: setSelectValue
  }, {
    type: 'select',
    label: 'Select field with optgroup',
    options: {
      'Main languages': {
        en: 'English',
        zh: 'Chinese'
      },
      'Other languages': {
        ja: 'Japanese'
      }
    },
    value: selectWithGroupValue,
    onChange: setSelectWithGroupValue
  }, {
    type: 'slider',
    label: 'Integer slider field',
    value: intSliderValue,
    min: 0,
    max: 10,
    onChange: setIntSliderValue
  }, {
    type: 'slider',
    label: 'Slider field',
    value: sliderValue,
    min: 0,
    max: 10,
    step: 0.1,
    onChange: setSliderValue,
    leftIcon: <ArrowBackIcon />,
    rightIcon: <ArrowForwardIcon />
  }, {
    type: 'textarea',
    label: 'Multiline field',
    placeholder: 'Please enter multiline text...',
    value: textareaValue,
    onChange: setTextareaValue,
    minW: 'full'
  }, {
    type: 'switch',
    label: 'Switch field',
    isChecked: switchValue,
    onChange: setSwitchValue,
    oneLine: true,
    minW: 'full'
  }, {
    type: 'switch',
    label: 'Disabled switch field',
    isChecked: false,
    isDisabled: true,
    oneLine: true,
    minW: 'full'
  }, {
    type: 'custom',
    label: 'Foreground colour',
    component: <RmgButtonGroup selections={[{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]} defaultValue={fg} onChange={value => setFg(value)} />
  }];
  const handleReset = () => {
    setInputValue('');
    setNumberValue('');
    setSelectValue('');
    setSelectWithGroupValue('en');
    setIntSliderValue(5);
    setSliderValue(5);
    setTextareaValue('');
    setSwitchValue(false);
    setFg('black');
  };
  return <Flex>
            <Box w={320}>
                <RmgFields fields={fields} minW={100} />
            </Box>

            <Box>
                <Text>Debounced input field: {inputValue}</Text>
                <Text>Debounced number field: {numberValue}</Text>
                <Text>Select field: {selectValue}</Text>
                <Text>Select with group field: {selectWithGroupValue}</Text>
                <Text>Integer slider field: {intSliderValue}</Text>
                <Text>Slider field: {sliderValue}</Text>
                <Text>Debounced multiline field: {<RmgMultiLineString text={textareaValue} delimiter={'\\n'} />}</Text>
                <Text>Switch field: {switchValue.toString()}</Text>
                <Text>Disabled switch field: false</Text>
                <Text>Button group field: {fg}</Text>

                <Button onClick={() => handleReset()}>Reset all</Button>
            </Box>
        </Flex>;
}`,...(I=(j=f.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var M,B,F;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);
  useEffect(() => {
    setMinError(false);
    if (min && max && min > max) {
      setMaxError(true);
    }
  }, [min]);
  useEffect(() => {
    setMaxError(false);
    if (min && max && min > max) {
      setMinError(true);
    }
  }, [max]);
  const options = Array(10).fill(0).reduce<Record<number, string>>((acc, cur, idx) => ({
    ...acc,
    [idx + 1]: (idx + 1).toString()
  }), {
    0: 'Please select...'
  });
  const fields: RmgFieldsField[] = [{
    type: 'select',
    label: 'Min',
    value: min,
    options: options,
    disabledOptions: [0],
    onChange: value => setMin((value as number)),
    isInvalid: minError
  }, {
    type: 'select',
    label: 'Max',
    value: max,
    options: options,
    disabledOptions: [0],
    onChange: value => setMax((value as number)),
    isInvalid: maxError
  }];
  return <Box w={320}>
            <Text>Please select a range</Text>
            <RmgFields fields={fields} />

            <Text>Your range: {min && max && !minError && !maxError ? \`from \${min} to \${max}\` : 'invalid'}</Text>
        </Box>;
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const ge=["Basic","TwoWayControlledSelects"];export{f as Basic,h as TwoWayControlledSelects,ge as __namedExportsOrder,he as default};
//# sourceMappingURL=rmg-fields.stories-226a962b.js.map
