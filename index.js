// ============================
// Fonctions demandées
// ============================

// --- CHAINES
function inverserChaine(str) {
  return String(str).split('').reverse().join('');
}
function compterCaracteres(str) {
  return String(str).length;
}
function majusculesPremiereLettre(phrase) {
  return String(phrase)
    .split(/\s+/)
    .map(m => m ? m.charAt(0).toUpperCase() + m.slice(1) : '')
    .join(' ');
}

// --- TABLEAUX
function parseArrayInput(str) {
  if (!str) return [];
  return str.split(',').map(s => Number(s.trim())).filter(n => !Number.isNaN(n));
}
function trouverMax(tab) {
  if (!tab.length) return null;
  return Math.max(...tab);
}
function trouverMin(tab) {
  if (!tab.length) return null;
  return Math.min(...tab);
}
function sommeTableau(tab) {
  return tab.reduce((acc, v) => acc + v, 0);
}
function filtrerTableau(tab, cond) {
  return tab.filter(cond);
}

// --- MATH
function factorielle(n) {
  n = Math.floor(Number(n));
  if (isNaN(n) || n < 0) return null;
  if (n === 0) return 1;
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}
function estPremier(n) {
  n = Math.floor(Number(n));
  if (isNaN(n) || n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= r; i += 2) if (n % i === 0) return false;
  return true;
}
function fibonacci(n) {
  n = Math.floor(Number(n));
  if (isNaN(n) || n <= 0) return [];
  if (n === 1) return [0];
  const suite = [0,1];
  for (let i = 2; i < n; i++) suite.push(suite[i-1] + suite[i-2]);
  return suite;
}

// ============================
// Liaison UI
// ============================

const textInput = document.getElementById('textInput');
const outString = document.getElementById('outString');
document.getElementById('btnInverse').addEventListener('click', () => {
  outString.textContent = inverserChaine(textInput.value);
});
document.getElementById('btnCount').addEventListener('click', () => {
  outString.textContent = compterCaracteres(textInput.value) + ' caractères';
});
document.getElementById('btnTitle').addEventListener('click', () => {
  outString.textContent = majusculesPremiereLettre(textInput.value);
});

const arrInput = document.getElementById('arrInput');
const outArray = document.getElementById('outArray');
document.getElementById('btnMax').addEventListener('click', () => {
  const arr = parseArrayInput(arrInput.value);
  outArray.textContent = 'Max = ' + (trouverMax(arr) ?? '(vide)');
});
document.getElementById('btnMin').addEventListener('click', () => {
  const arr = parseArrayInput(arrInput.value);
  outArray.textContent = 'Min = ' + (trouverMin(arr) ?? '(vide)');
});
document.getElementById('btnSum').addEventListener('click', () => {
  const arr = parseArrayInput(arrInput.value);
  outArray.textContent = 'Somme = ' + sommeTableau(arr);
});
document.getElementById('btnFilter').addEventListener('click', () => {
  const arr = parseArrayInput(arrInput.value);
  outArray.textContent = 'Filtré >10 = [' + filtrerTableau(arr, n => n > 10).join(', ') + ']';
});

const numInput = document.getElementById('numInput');
const outNumber = document.getElementById('outNumber');
document.getElementById('btnFact').addEventListener('click', () => {
  outNumber.textContent = 'Factorielle = ' + factorielle(numInput.value);
});
document.getElementById('btnPrime').addEventListener('click', () => {
  outNumber.textContent = estPremier(numInput.value) ? 'Premier' : 'Pas premier';
});
document.getElementById('btnFib').addEventListener('click', () => {
  outNumber.textContent = 'Fibonacci = [' + fibonacci(numInput.value).join(', ') + ']';
});
