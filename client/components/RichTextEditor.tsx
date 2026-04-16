'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Minus,
  Highlighter,
  RemoveFormatting,
  Undo,
  Redo,
} from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
  hasError?: boolean
}

const COLORS = [
  '#000000', '#374151', '#6b7280', '#9ca3af',
  '#ef4444', '#f97316', '#eab308', '#22c55e',
  '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6',
  '#1d4ed8', '#dc2626', '#16a34a', '#ca8a04',
]

function ToolbarDivider() {
  return <div className="w-px h-5 bg-gray-200 mx-1 shrink-0" />
}

function ToolBtn({
  onClick,
  active,
  title,
  children,
  disabled,
}: {
  onClick: () => void
  active?: boolean
  title: string
  children: React.ReactNode
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        'p-1.5 rounded-lg transition-colors shrink-0',
        active
          ? 'bg-[#1d4ed8] text-white'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
        disabled && 'opacity-40 cursor-not-allowed',
      )}
    >
      {children}
    </button>
  )
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write your blog content here…',
  hasError,
}: RichTextEditorProps) {
  const colorInputRef = useRef<HTMLInputElement>(null)
  const highlightInputRef = useRef<HTMLInputElement>(null)
  const isInternalChange = useRef(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-[#1d4ed8] underline cursor-pointer' },
      }),
    ],
    content: value || '',
    editorProps: {
      attributes: {
        class: cn(
          'min-h-[300px] px-4 py-3 text-sm text-gray-900 focus:outline-none',
          'prose prose-sm max-w-none',
          '[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3',
          '[&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2',
          '[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-2',
          '[&_p]:mb-2 [&_p]:leading-relaxed',
          '[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-2',
          '[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-2',
          '[&_code]:bg-gray-100 [&_code]:px-1 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono',
          '[&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:mb-3',
          '[&_blockquote]:border-l-4 [&_blockquote]:border-[#1d4ed8] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600',
          '[&_a]:text-[#1d4ed8] [&_a]:underline',
          '[&_hr]:border-gray-200 [&_hr]:my-4',
        ),
      },
    },
    onUpdate: ({ editor }) => {
      isInternalChange.current = true
      onChange(editor.getHTML())
    },
    immediatelyRender: false,
  })

  // Sync external value changes (e.g. when editing an existing post)
  useEffect(() => {
    if (!editor) return
    if (isInternalChange.current) {
      isInternalChange.current = false
      return
    }
    const current = editor.getHTML()
    if (current !== value) {
      editor.commands.setContent(value || '')
    }
  }, [editor, value])

  const setLink = useCallback(() => {
    if (!editor) return
    const prev = editor.getAttributes('link').href as string
    const url = window.prompt('Enter URL', prev || 'https://')
    if (url === null) return
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }
  }, [editor])

  if (!editor) return null

  return (
    <div
      className={cn(
        'rounded-xl border overflow-hidden bg-white transition',
        hasError
          ? 'border-red-300 ring-1 ring-red-200'
          : 'border-gray-200 focus-within:border-[#1d4ed8] focus-within:ring-2 focus-within:ring-[#1d4ed8]/20',
      )}
    >
      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-gray-100 bg-gray-50/80">

        {/* History */}
        <ToolBtn onClick={() => editor.chain().focus().undo().run()} title="Undo" disabled={!editor.can().undo()}>
          <Undo className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()} title="Redo" disabled={!editor.can().redo()}>
          <Redo className="h-3.5 w-3.5" />
        </ToolBtn>

        <ToolbarDivider />

        {/* Headings */}
        <ToolBtn
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <Heading1 className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <Heading2 className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <Heading3 className="h-3.5 w-3.5" />
        </ToolBtn>

        <ToolbarDivider />

        {/* Inline marks */}
        <ToolBtn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold (Ctrl+B)"
        >
          <Bold className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic (Ctrl+I)"
        >
          <Italic className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
          title="Underline (Ctrl+U)"
        >
          <UnderlineIcon className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
          title="Strikethrough"
        >
          <Strikethrough className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleCode().run()}
          active={editor.isActive('code')}
          title="Inline code"
        >
          <Code className="h-3.5 w-3.5" />
        </ToolBtn>

        <ToolbarDivider />

        {/* Text color */}
        <div className="relative" title="Text color">
          <button
            type="button"
            onClick={() => colorInputRef.current?.click()}
            className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex flex-col items-center gap-0.5"
          >
            <span className="text-xs font-bold leading-none" style={{ color: editor.getAttributes('textStyle').color || '#000' }}>A</span>
            <span
              className="w-4 h-1 rounded-sm"
              style={{ background: editor.getAttributes('textStyle').color || '#000' }}
            />
          </button>
          <input
            ref={colorInputRef}
            type="color"
            defaultValue="#000000"
            className="absolute opacity-0 w-0 h-0 pointer-events-none"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          />
        </div>

        {/* Highlight color */}
        <div className="relative" title="Highlight color">
          <button
            type="button"
            onClick={() => highlightInputRef.current?.click()}
            className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Highlighter className="h-3.5 w-3.5" />
          </button>
          <input
            ref={highlightInputRef}
            type="color"
            defaultValue="#fef08a"
            className="absolute opacity-0 w-0 h-0 pointer-events-none"
            onChange={(e) =>
              editor.chain().focus().toggleHighlight({ color: e.target.value }).run()
            }
          />
        </div>

        {/* Quick color swatches */}
        <div className="flex gap-0.5 flex-wrap max-w-[80px]">
          {COLORS.slice(0, 8).map((c) => (
            <button
              key={c}
              type="button"
              title={c}
              onClick={() => editor.chain().focus().setColor(c).run()}
              className="w-3.5 h-3.5 rounded-sm border border-white shadow-sm hover:scale-110 transition-transform"
              style={{ background: c }}
            />
          ))}
        </div>

        <ToolbarDivider />

        {/* Lists */}
        <ToolBtn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet list"
        >
          <List className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Numbered list"
        >
          <ListOrdered className="h-3.5 w-3.5" />
        </ToolBtn>

        <ToolbarDivider />

        {/* Alignment */}
        <ToolBtn
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          active={editor.isActive({ textAlign: 'left' })}
          title="Align left"
        >
          <AlignLeft className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          active={editor.isActive({ textAlign: 'center' })}
          title="Align center"
        >
          <AlignCenter className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          active={editor.isActive({ textAlign: 'right' })}
          title="Align right"
        >
          <AlignRight className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          active={editor.isActive({ textAlign: 'justify' })}
          title="Justify"
        >
          <AlignJustify className="h-3.5 w-3.5" />
        </ToolBtn>

        <ToolbarDivider />

        {/* Link + extras */}
        <ToolBtn onClick={setLink} active={editor.isActive('link')} title="Insert / edit link">
          <LinkIcon className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          active={false}
          title="Horizontal rule"
        >
          <Minus className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          active={false}
          title="Clear formatting"
        >
          <RemoveFormatting className="h-3.5 w-3.5" />
        </ToolBtn>
      </div>

      {/* ── Editor area ── */}
      <EditorContent
        editor={editor}
        placeholder={placeholder}
      />

      {/* Word count */}
      <div className="px-4 py-1.5 border-t border-gray-100 bg-gray-50/60 flex justify-end">
        <span className="text-xs text-gray-400">
          {editor.storage.characterCount?.words?.() ??
            editor
              .getText()
              .trim()
              .split(/\s+/)
              .filter(Boolean).length}{' '}
          words
        </span>
      </div>
    </div>
  )
}
