import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { basicSetup } from 'codemirror'
import { EditorState, Compartment } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';

const useCodeMirror = (props) => {
    const refContainer = useRef();
    const [editorView, setEditorView] = useState();
    const { onChange } = props;

    useEffect(() => {
        if (!refContainer.current) return

        const startState = EditorState.create({
            doc: props.initDoc,
            extensions: [
                basicSetup,
                keymap.of(defaultKeymap),
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                    addKeymap: true
                }),
                vscodeDarkInit({
                    settings: {
                        fontFamily: '$mono',
                    }
                }),
                EditorView.lineWrapping,
                EditorView.updateListener.of(update => {
                    if (update.changes) {
                        onChange && onChange(update.state)
                    }
                })
            ]
        })

        const view = new EditorView({
            state: startState,
            parent: refContainer.current
        })
        setEditorView(view)

        return () => {
            view.destroy()
        }
    }, [refContainer.current])

    return [refContainer, editorView]
}

export default useCodeMirror