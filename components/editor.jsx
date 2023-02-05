import React, { useCallback, useEffect } from 'react'
// import { EditorState } from '@codemirror/state'
import useCodeMirror from './use-codemirror'
import { styled } from '../stitches.config'

const StyledEditor = styled('div', {
    width: '50%',
    height: '100vh',
    backgroundColor: '#1E1E1E',
})

const Editor = (props) => {
    const { onChange, initialDoc } = props
    const handleChange = useCallback(
        (state) => onChange(state.doc.toString()),
        [onChange]
    )

    const [refContainer, editorView] = useCodeMirror({
        initialDoc,
        onChange
    })

    useEffect(() => {
        if (editorView) {

        } else {

        }
    }, [editorView])

    return (
        <StyledEditor>
            <div ref={refContainer} />
        </StyledEditor>
    )
}



export default Editor