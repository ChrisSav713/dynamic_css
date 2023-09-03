export const flex = Object.freeze({
  display: Object.freeze({
    FLEX: Symbol('flex'),
    INLINE_FLEX: Symbol('inline-flex')
  }),
  direction: Object.freeze({
    COLUMN: Symbol('column'),
    COLUMN_REVERSE: Symbol('column-reverse'),
    ROW: Symbol('row'),
    ROW_REVERSE: Symbol('row-reverse')
  }),
  wrap: Object.freeze({
    NOWRAP: Symbol('nowrap'),
    WRAP: Symbol('wrap'),
    WRAP_REVERSE: Symbol('wrap-reverse')
  }),
  justifyContent: Object.freeze({
    FLEX_START: Symbol('flex-start'),
    FLEX_END: Symbol('flex-end'),
    CENTER: Symbol('center'),
    SPACE_BETWEEN: Symbol('space-between'),
    SPACE_AROUND: Symbol('space-around'),
    SPACE_EVENLY: Symbol('space-evenly')
  }),
  alignItems: Object.freeze({
    BASELINE: Symbol('baseline'),
    CENTER: Symbol('center'),
    FLEX_END: Symbol('flex-end'),
    FLEX_START: Symbol('flex-start'),
    STRETCH: Symbol('stretch')
  }),
  alignContent: Object.freeze({
    CENTER: Symbol('center'),
    FLEX_END: Symbol('flex-end'),
    FLEX_START: Symbol('flex-start'),
    SPACE_BETWEEN: Symbol('space-between'),
    SPACE_AROUND: Symbol('space-around'),
    STRETCH: Symbol('stretch')
  }),
  alignSelf: Object.freeze({
    AUTO: Symbol('auto'),
    FLEX_START: Symbol('flex-start'),
    FLEX_END: Symbol('flex-end'),
    CENTER: Symbol('center'),
    BASELINE: Symbol('baseline'),
    STRETCH: Symbol('stretch')
  }),
  flexGrow: Object.freeze({
    FLEX_START: Symbol('flex-start'),
    FLEX_END: Symbol('flex-end'),
    CENTER: Symbol('center'),
    SPACE_BETWEEN: Symbol('space-between'),
    SPACE_AROUND: Symbol('space-around'),
    STRETCH: Symbol('stretch')
  }),
  flexShrink: Object.freeze({
    FLEX_START: Symbol('flex-start'),
    FLEX_END: Symbol('flex-end'),
    CENTER: Symbol('center'),
    SPACE_BETWEEN: Symbol('space-between'),
    SPACE_AROUND: Symbol('space-around'),
    STRETCH: Symbol('stretch')
  }),
  flexBasis: Object.freeze({
    AUTO: Symbol('auto'),
    PX: Symbol('px'),
    EM: Symbol('em'),
    PERCENT: Symbol('%'),
    VH: Symbol('vh'),
    VW: Symbol('vw')
  }),
  order: Object.freeze({
    AUTO: Symbol('auto'),
    PX: Symbol('px'),
    EM: Symbol('em'),
    PERCENT: Symbol('%'),
    VH: Symbol('vh'),
    VW: Symbol('vw')
  })
})

export const sizing = Object.freeze({
  width: Object.freeze({
    AUTO: Symbol('auto'),
    PX: Symbol('px'),
    EM: Symbol('em'),
    PERCENT: Symbol('%'),
    VH: Symbol('vh'),
    VW: Symbol('vw')
  }),
  height: Object.freeze({
    AUTO: Symbol('auto'),
    PX: Symbol('px'),
    EM: Symbol('em'),
    PERCENT: Symbol('%'),
    VH: Symbol('vh'),
    VW: Symbol('vw')
  })
})

export const layout = Object.freeze({
  display: Object.freeze({
    INLIINE_BLOCK: Symbol('inline-block'),
    INLINE: Symbol('inline'),
    FLEX: Symbol('flex'),
    INLINE_FLEX: Symbol('inline-flex'),
    TABLE: Symbol('table'),
    INLINE_TABLE: Symbol('inline-table'),
    TABLE_CAPTION: Symbol('table-caption'),
    TABLE_CELL: Symbol('table-cell'),
    TABLE_COLUMN: Symbol('table-column'),
    TABLE_FOOTER: Symbol('table-footer-group'),
    TABLE_HEADER: Symbol('table-header-group'),
    TABLE_ROW_GROUP: Symbol('table-row-group'),
    TABLE_ROW: Symbol('table-row'),
    FLOW_ROOT: Symbol('flow-root'),
    GRID: Symbol('grid'),
    INLINE_GRID: Symbol('inline-grid'),
    CONTENTS: Symbol('contents'),
    LIST_ITEM: Symbol('list-item'),
    NONE: Symbol('none')
  })
})

export const grid = Object.freeze({
  templateColumns: Object.freeze({
    INLIINE_BLOCK: Symbol('inline-block'),
    GRID_COLS_1: Symbol('grid-cols-1'),
    GRID_COLS_2: Symbol('grid-cols-2'),
    GRID_COLS_3: Symbol('grid-cols-3'),
    GRID_COLS_4: Symbol('grid-cols-4'),
    GRID_COLS_5: Symbol('grid-cols-5'),
    GRID_COLS_6: Symbol('grid-cols-6'),
    GRID_COLS_7: Symbol('grid-cols-7'),
    GRID_COLS_8: Symbol('grid-cols-8'),
    GRID_COLS_9: Symbol('grid-cols-9'),
    GRID_COLS_10: Symbol('grid-cols-10'),
    GRID_COLS_11: Symbol('grid-cols-11'),
    GRID_COLS_12: Symbol('grid-cols-12'),
    GRID_COLS_NONE: Symbol('grid-cols-none')
  }),
  templateRows: Object.freeze({
    INLIINE_BLOCK: Symbol('inline-block'),
    GRID_ROWS_1: Symbol('grid-rows-1'),
    GRID_ROWS_2: Symbol('grid-rows-2'),
    GRID_ROWS_3: Symbol('grid-rows-3'),
    GRID_ROWS_4: Symbol('grid-rows-4'),
    GRID_ROWS_5: Symbol('grid-rows-5'),
    GRID_ROWS_6: Symbol('grid-rows-6'),
    GRID_ROWS_NONE: Symbol('grid-rows-none')
  }),
  autoFlow: Object.freeze({
    ROW: Symbol('row'),
    COLUMN: Symbol('column'),
    ROW_DENSE: Symbol('row-dense'),
    COLUMN_DENSE: Symbol('column-dense')
  }),
  autoColumns: Object.freeze({
    AUTO: Symbol('auto'),
    MIN: Symbol('min'),
    MAX: Symbol('max'),
    FR: Symbol('fr')
  }),
  autoRows: Object.freeze({
    AUTO: Symbol('auto'),
    MIN: Symbol('min'),
    MAX: Symbol('max'),
    FR: Symbol('fr')
  }),
  gap: Object.freeze({
    GAP_0: Symbol('gap-0'),
    GAP_1: Symbol('gap-1'),
    GAP_2: Symbol('gap-2'),
    GAP_3: Symbol('gap-3'),
    GAP_4: Symbol('gap-4'),
    GAP_5: Symbol('gap-5'),
    GAP_6: Symbol('gap-6'),
    GAP_8: Symbol('gap-8'),
    GAP_10: Symbol('gap-10'),
    GAP_12: Symbol('gap-12'),
    GAP_16: Symbol('gap-16'),
    GAP_20: Symbol('gap-20'),
    GAP_24: Symbol('gap-24'),
    GAP_32: Symbol('gap-32'),
    GAP_40: Symbol('gap-40'),
    GAP_48: Symbol('gap-48'),
    GAP_56: Symbol('gap-56'),
    GAP_64: Symbol('gap-64'),
    GAP_NONE: Symbol('gap-none'),
    GAP_X_0: Symbol('gap-x-0'),
    GAP_X_1: Symbol('gap-x-1'),
    GAP_X_2: Symbol('gap-x-2'),
    GAP_X_3: Symbol('gap-x-3'),
    GAP_X_4: Symbol('gap-x-4'),
    GAP_X_5: Symbol('gap-x-5'),
    GAP_X_6: Symbol('gap-x-6'),
    GAP_X_8: Symbol('gap-x-8'),
    GAP_X_10: Symbol('gap-x-10'),
    GAP_X_12: Symbol('gap-x-12'),
    GAP_X_16: Symbol('gap-x-16'),
    GAP_X_20: Symbol('gap-x-20'),
    GAP_X_24: Symbol('gap-x-24'),
    GAP_X_32: Symbol('gap-x-32'),
    GAP_X_40: Symbol('gap-x-40'),
    GAP_X_48: Symbol('gap-x-48'),
    GAP_X_56: Symbol('gap-x-56'),
    GAP_X_64: Symbol('gap-x-64'),
    GAP_X_PX: Symbol('gap-x-px'),
    GAP_X_REVERSE: Symbol('gap-x-reverse'),
    GAP_Y_0: Symbol('gap-y-0'),
    GAP_Y_1: Symbol('gap-y-1'),
    GAP_Y_2: Symbol('gap-y-2'),
    GAP_Y_3: Symbol('gap-y-3'),
    GAP_Y_4: Symbol('gap-y-4'),
    GAP_Y_5: Symbol('gap-y-5'),
    GAP_Y_6: Symbol('gap-y-6'),
    GAP_Y_8: Symbol('gap-y-8'),
    GAP_Y_10: Symbol('gap-y-10'),
    GAP_Y_12: Symbol('gap-y-12'),
    GAP_Y_16: Symbol('gap-y-16'),
    GAP_Y_20: Symbol('gap-y-20'),
    GAP_Y_24: Symbol('gap-y-24'),
    GAP_Y_32: Symbol('gap-y-32'),
    GAP_Y_40: Symbol('gap-y-40'),
    GAP_Y_48: Symbol('gap-y-48'),
    GAP_Y_56: Symbol('gap-y-56'),
    GAP_Y_64: Symbol('gap-y-64'),
    GAP_Y_PX: Symbol('gap-y-px'),
    GAP_Y_REVERSE: Symbol('gap-y-reverse')
  }),
  column: Object.freeze({
    SPAN_1: Symbol('col-span-1'),
    SPAN_2: Symbol('col-span-2'),
    SPAN_3: Symbol('col-span-3'),
    SPAN_4: Symbol('col-span-4'),
    SPAN_5: Symbol('col-span-5'),
    SPAN_6: Symbol('col-span-6'),
    SPAN_7: Symbol('col-span-7'),
    SPAN_8: Symbol('col-span-8'),
    SPAN_9: Symbol('col-span-9'),
    SPAN_10: Symbol('col-span-10'),
    SPAN_11: Symbol('col-span-11'),
    SPAN_12: Symbol('col-span-12'),
    SPAN_FULL: Symbol('col-span-full'),
    START_1: Symbol('col-start-1'),
    START_2: Symbol('col-start-2'),
    START_3: Symbol('col-start-3'),
    START_4: Symbol('col-start-4'),
    START_5: Symbol('col-start-5'),
    START_6: Symbol('col-start-6'),
    START_7: Symbol('col-start-7'),
    START_8: Symbol('col-start-8'),
    START_9: Symbol('col-start-9'),
    START_10: Symbol('col-start-10'),
    START_11: Symbol('col-start-11'),
    START_12: Symbol('col-start-12'),
    START_13: Symbol('col-start-13'),
    START_AUTO: Symbol('col-start-auto'),
    END_1: Symbol('col-end-1'),
    END_2: Symbol('col-end-2'),
    END_3: Symbol('col-end-3'),
    END_4: Symbol('col-end-4'),
    END_5: Symbol('col-end-5'),
    END_6: Symbol('col-end-6'),
    END_7: Symbol('col-end-7'),
    END_8: Symbol('col-end-8'),
    END_9: Symbol('col-end-9'),
    END_10: Symbol('col-end-10'),
    END_11: Symbol('col-end-11'),
    END_12: Symbol('col-end-12'),
    END_13: Symbol('col-end-13'),
    END_AUTO: Symbol('col-end-auto')
  }),
  row: Object.freeze({
    SPAN_1: Symbol('row-span-1'),
    SPAN_2: Symbol('row-span-2'),
    SPAN_3: Symbol('row-span-3'),
    SPAN_4: Symbol('row-span-4'),
    SPAN_5: Symbol('row-span-5'),
    SPAN_6: Symbol('row-span-6'),
    SPAN_FULL: Symbol('row-span-full'),
    START_1: Symbol('row-start-1'),
    START_2: Symbol('row-start-2'),
    START_3: Symbol('row-start-3'),
    START_4: Symbol('row-start-4'),
    START_5: Symbol('row-start-5'),
    START_6: Symbol('row-start-6'),
    START_7: Symbol('row-start-7'),
    START_AUTO: Symbol('row-start-auto'),
    END_1: Symbol('row-end-1'),
    END_2: Symbol('row-end-2'),
    END_3: Symbol('row-end-3'),
    END_4: Symbol('row-end-4'),
    END_5: Symbol('row-end-5'),
    END_6: Symbol('row-end-6'),
    END_7: Symbol('row-end-7'),
    END_AUTO: Symbol('row-end-auto')
  }),

  justifyItems: Object.freeze({
    JUSTIFY_ITEMS_AUTO: Symbol('justify-items-auto'),
    JUSTIFY_ITEMS_START: Symbol('justify-items-start'),
    JUSTIFY_ITEMS_END: Symbol('justify-items-end'),
    JUSTIFY_ITEMS_CENTER: Symbol('justify-items-center'),
    JUSTIFY_ITEMS_STRETCH: Symbol('justify-items-stretch')
  }),
  justifySelf: Object.freeze({
    JUSTIFY_SELF_AUTO: Symbol('justify-self-auto'),
    JUSTIFY_SELF_START: Symbol('justify-self-start'),
    JUSTIFY_SELF_END: Symbol('justify-self-end'),
    JUSTIFY_SELF_CENTER: Symbol('justify-self-center'),
    JUSTIFY_SELF_STRETCH: Symbol('justify-self-stretch')
  }),
  placeContent: Object.freeze({
    PLACE_CONTENT_CENTER: Symbol('place-content-center'),
    PLACE_CONTENT_START: Symbol('place-content-start'),
    PLACE_CONTENT_END: Symbol('place-content-end'),
    PLACE_CONTENT_BETWEEN: Symbol('place-content-between'),
    PLACE_CONTENT_AROUND: Symbol('place-content-around'),
    PLACE_CONTENT_EVENLY: Symbol('place-content-evenly'),
    PLACE_CONTENT_STRETCH: Symbol('place-content-stretch')
  }),
  placeItems: Object.freeze({
    PLACE_ITEMS_AUTO: Symbol('place-items-auto'),
    PLACE_ITEMS_START: Symbol('place-items-start'),
    PLACE_ITEMS_END: Symbol('place-items-end'),
    PLACE_ITEMS_CENTER: Symbol('place-items-center'),
    PLACE_ITEMS_STRETCH: Symbol('place-items-stretch')
  }),
  placeSelf: Object.freeze({
    PLACE_SELF_AUTO: Symbol('place-self-auto'),
    PLACE_SELF_START: Symbol('place-self-start'),
    PLACE_SELF_END: Symbol('place-self-end'),
    PLACE_SELF_CENTER: Symbol('place-self-center'),
    PLACE_SELF_STRETCH: Symbol('place-self-stretch')
  })
})
