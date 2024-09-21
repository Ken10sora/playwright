import { test } from '@playwright/test'

test('スクリーンショット', async ({ page }) => {
  await page.goto('https;//playwright.dev/')
  await await page.getByRole('heading', { name: 'Playwright enables reliable' }).screenshot({ path: 'screenshot-element.png' })
})

test('スクリーンショット', async ({ page}) => {
  await page.goto('https://playwright.dev/')
  await page.screenshot({ path: 'screenshot_full.png', fullPage: true })
  // 特定のAPIが呼ばれて帰ってくるまで待つ
  const responsePromise = page.waitForResponse('https://example.com/resource')
  await page.getByText('trigger response').click()
  const response = await responsePromise

  // URLが特定のページになるまで待つ
  await page.waitForURL('**/login')
})

test('親テスト', async ({ page }) =>{})

test.describe('テストスイート', () => {
  test('子テスト1', async ({ page })=> {}) 
  test.only('子テスト2', async ({ page }) => {})
})



