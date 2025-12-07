// بيانات تجريبية
let salesData = [1200, 1500, 900, 2100, 2600, 3000, 1800];
let lowStockItems = [{ item: "شفرات", qty: 5 }, { item: "فوط", qty: 3 }];

// تحديث البطاقات
document.getElementById("salesTotal").innerHTML = "65000";
document.getElementById("purchasesTotal").innerHTML = "18000";
document.getElementById("netProfit").innerHTML = "47000";
document.getElementById("lowStockCount").innerHTML = lowStockItems.length;

// تعبئة جدول المخزون
let tableBody = document.getElementById("lowStockTable");
lowStockItems.forEach(row => tableBody.innerHTML += `<tr><td>${row.item}</td><td>${row.qty}</td></tr>`);

// رسم بياني للمبيعات
const ctx = document.getElementById('salesChart');
new Chart(ctx, {
    type: 'line',
    data: { labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], datasets: [{ label: 'Sales', data: salesData, borderWidth: 3 }] },
    options: { responsive: true }
});

