'use strict';
// вычисляет массивы минимальных ширин колонок и высот строк для матрицы ячеек.
// Переменная rows будет содержать массив массивов,
// где каждый внутренний массив – это строка ячеек.
// rows = [
//   ['строка ячейки'], ['строка ячейки'], ['строка ячейки']
// ]
function rowHeights(rows) {
  return rows.map(function(row) {
    // здесь проходим по всему массиву массивов (чтобы не упустить ничего)
    return row.reduce(function(max, cell) {
      // Здесь считаем максимальную высоту строки ячейки
      return Math.max(max, cell.minHeight(
        // это что за функция?
      ));
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

// функция рисования таблицы
function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

// внутренняя функция рисования всех строк
  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}
