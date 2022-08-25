## 网格布局

### Grid 布局 （二维布局）

```
 _  _  _ column
|1_ |2_ |3_| 
|4_ |5_ |6_| row
|7_ |8_ |9_|
```

#### 实战例子

> 九宫格 12宫格 两列栏 上左右下 

```css
grid-template-areas: 'a b c'
                     'd e f'
										 'g h i'
					 
grid-template-areas: 'a a b'
                     'a a b'
										 'a a b'
					 
grid-template-areas: 'a a a'
				     				 'b b c'
										 'd d d'
					 
grid-template-areas: 'a a b'
				     				 'a a d'
										 'c e d'
```

#### 与flex布局区别 

1. 应用于单行
2. `flex` 项目之间高度相等，不等会被拉伸 `align-items: strech`
3. `grid` 项目高度可以不等  可多行交叉反复

---
										 	 
- 采用网格布局的区域，称为"容器"（`container`）。容器内部采用网格定位的子元素，称为"项目"（`item`）

- 容器里面的水平区域称为"行"（`row`），垂直区域称为"列"（`column`)

- 行和列的交叉区域，称为"单元格"（`cell`）

- 几行几列`n * m (3 * 3)` 9个单元格 n+1 条 `grid-column-line` 线 m+1 条 `grid-row-line` 线

#### 容器属性

- `display; grid;` // 布局
- `grid-template-columns, grid-template-rows;` // 网格划分
- `grid-template-areas` // 网格区域划分
- `grid-auto-flow` // 网格划分好后，项目的排序
- `grid-row-gap,grid-column-gap,grid-gap` // 项目间距
- `justify-items，align-items ，place-items`  // 单元格内容对齐方式
- `justify-content ，align-content ，place-content` // 项目对齐方式
- `grid-auto-columns ,grid-auto-rows` // 额外区域创建的大小
> `display: grid;` // 容器元素都是块级元素，但也可以设成行内元素

---

```
	注意，设为网格布局以后容器子元素（项目）的
	float、display: inline-block、
	display: table-cell、
	vertical-align
	和column-*等设置都将失效。
```

- `grid-template-columns, grid-template-rows`

	- `grid-template-columns` 属性定义每一列的列宽，`grid-template-rows` 属性定义每一行的行高。

	用于 `columns rows` 属性上的计算函数
	`repeat()` 接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值
	有时，单元格的大小是固定的，但是容器的大小不确定
	如果希望每一行（或每一列）容纳尽可能多的单元格
	这时可以使用 `auto-fill` 关键字表示自动填充

	`minmax()` 函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
	`auto` 关键字表示由浏览器自己决定长度

	`grid-template-columns` 属性和 `grid-template-rows` 属性里面
	还可以使用方括号，指定每一根网格线的名字，方便以后的引用
	网格布局允许同一根线有多个名字，比如 [`fifth-line row-5`]

> 间距
`grid-row-gap`
`grid-column-gap`
`grid-gap`

- 区域 `area`  单元格合并好用这个属性

	- `grid-template-areas`
	网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成
	多个单元格合并成一个区域
	如果某些区域不需要利用，则使用"点"（.）表示

	注意，区域的命名会影响到网格线
	每个区域的起始网格线
	会自动命名为区域名-`start`，终止网格线自动命名为区域名-`end`

	`grid-auto-flow: value`
	可用值 `row` (默认) `column row dense`(密集) `column dense`
	划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格
	默认的放置顺序是"先行后列"，即先填满第一行
	再开始放入第二行

// 网格空位不足时， 浏览器会自动填充创建

- 单元格内容
`justify-items，align-items ，place-items `
`justify-items` 属性设置单元格内容的水平位置（左中右）
`align-items` 属性设置单元格内容的垂直位置（上中下）

- 取值 `value`
	- `start`：对齐单元格的起始边缘。
	`end`：对齐单元格的结束边缘。
	`center`：单元格内部居中。
	`stretch`：拉伸，占满单元格的整个宽度（默认值）。
	`place-items` 属性是`align-items`属性和`justify-items`属性的合并简写形式。

- 内容区域
	- `justify-content ，align-content ，place-content`
	`justify-content` 属性是整个内容区域在容器里面的水平位置（左中右）
	`align-content` 属性是整个内容区域的垂直位置（上中下)

	- value:
	`start | end | center | stretch(默认) | space-around | space-between | space-evenly;`

> 没设置时 网格空位不足时， 浏览器会自动填充创建
`grid-auto-columns ,grid-auto-rows`
一些项目的指定位置，在现有网格的外部
浏览器会自动生成多余的网格，以便放置项目

```css
div {
	grid-template-columns: 100px 100px 100px;
	grid-template-columns: repeat(3, 100px);
	grid-template-columns: repeat(auto-fill, 100px);
	grid-template-columns: 1fr 1fr minmax(100px, 1fr);
	grid-template-columns: 100px auto 100px;
	grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
	grid-template-columns: [c1 colunm-1] 100px [c2] 100px [c3] auto [c4];
	grid-template-rows: 100px 100px 100px
	grid-row-gap: 20px;
	grid-column-gap: 20px;
	grid-gap: <grid-row-gap> <grid-column-gap>;
	grid-template-areas: 'a b c'
	                     'd e f'
	                     'g h i';
	grid-template-areas: 'a a b'
						 'c c b'
						 'd d d';
	justify-items: start;
	place-items: <align-items> <justify-items>;
	place-content: <align-content> <justify-content>;
}
```

#### 项目属性

- `grid-column-start，grid-column-end，grid-row-start，grid-row-end` // 项目位置， 网格线指定
- `grid-area` // 位置，定义指定
- `justify-self ，align-self ，place-self` // 内容对齐， 单个项目 

- `grid-column-start，grid-column-end，grid-row-start，grid-row-end` 
- `grid-column-start`属性：左边框所在的垂直网格线
- `grid-column-end`属性：右边框所在的垂直网格线
- `grid-row-start`属性：上边框所在的水平网格线
- `grid-row-end`属性：下边框所在的水平网格线

> 除了指定为第几个网格线，还可以指定为网格线的名字。
> 还可以使用span关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

- `grid-column ，grid-row `简写属性

- `grid-area`
指定项目放在哪一个区域。

- `grid-area`属性还可用作
`grid-row-start、grid-column-start、grid-row-end、grid-column-end` 的合并简写形式

> 直接指定项目的位置。

- `justify-self ，align-self ，place-self `

- `justify-self`属性设置单元格内容的水平位置（左中右）
- 跟`justify-items`属性的用法完全一致，但只作用于单个项目。
- `align-self`属性设置单元格内容的垂直位置（上中下）
- 跟`align-items`属性的用法完全一致，也是只作用于单个项目

```css
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: header-start;
  grid-column-end: header-end;
  grid-column-start: span 2;
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
  grid-column: 1 / span 2;
  grid-area: header;
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
  grid-area: 1 / 1 / 3 / 3;
  justify-self: start | end | center | stretch;
  place-self: <align-self> <justify-self>;
}
```
