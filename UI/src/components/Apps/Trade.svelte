<script>
    import { Card, Accordion, AccordionItem, P, FloatingLabelInput, Label
        , Select } from 'flowbite-svelte'
    let chains = [
        { value: 'foo', name: 'foo' },
        { value: 'bar', name: 'bar' },
        { value: 'baz', name: 'baz' }
    ]
</script>

<Card class="!w-full">
    <Accordion>
        <AccordionItem class="!ring-0">
            <span class="relative" slot="header">
                <P class="!text-xl !font-semibold bg-red-700 w-6 h-6 flex items-center justify-center rounded-full">!</P>
            </span>
            <Label color="red">Destination</Label>
            <Select class={`!ring-0 border-0 border-b-2 rounded-none bg-white dark:bg-gray-800 !border-red-500 text-slate-600 dark:text-slate-400`} items="{chains}" placeholder="Select a chain"/>
            <FloatingLabelInput color="red" class="font-mono mt-4" label="Input"/>
            <FloatingLabelInput color="red" class="font-mono mt-4" label="Output"/>
            <FloatingLabelInput color="red" class="font-mono mt-4" label="Gas"/>
            <FloatingLabelInput color="red" class="font-mono mt-4" label="Work"/>
        </AccordionItem>
        <AccordionItem class="!ring-0">bar</AccordionItem>
        <AccordionItem class="!ring-0">baz</AccordionItem>
    </Accordion>
</Card>