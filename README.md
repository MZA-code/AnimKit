# AnimKit

Mini librairie d'animations CSS/SCSS pour e-commerce. Une classe = une animation. Pas de JS requis, pas de structure HTML imposée.

## Installation

**Via npm :**

```bash
npm install animkit
```

**Ou copier le CSS directement :**

```html
<link rel="stylesheet" href="dist/animkit.min.css">
```

## Usage

Ajoutez simplement une classe `ak-` sur n'importe quel élément HTML :

```html
<button class="ak-lift-hover">Ajouter au panier</button>

<a class="ak-underline-slide" href="#">Mon lien</a>

<img class="ak-zoom-hover" src="product.jpg" />

<span class="ak-pulse-loop">PROMO</span>
```

## Classes disponibles

### Boutons (`_buttons.scss`)
| Classe | Effet |
|--------|-------|
| `ak-lift-hover` | Elévation + ombre au hover |
| `ak-fill-hover` | Remplissage background de gauche à droite |
| `ak-pulse-hover` | Léger scale up au hover |
| `ak-shine-hover` | Reflet brillant qui traverse le bouton |
| `ak-ripple-hover` | Effet ripple material |
| `ak-slide-arrow-hover` | Flèche qui apparaît à droite |

### Liens (`_links.scss`)
| Classe | Effet |
|--------|-------|
| `ak-underline-slide` | Soulignement glisse de gauche à droite |
| `ak-underline-grow` | Soulignement grandit depuis le centre |
| `ak-underline-thick` | Soulignement épais style marker |
| `ak-color-fade` | Transition douce de couleur |
| `ak-bracket-hover` | Crochets [ ] qui apparaissent |

### Images (`_images.scss`)
| Classe | Effet |
|--------|-------|
| `ak-zoom-hover` | Zoom dans l'image au hover |
| `ak-brightness-hover` | Augmentation luminosité |
| `ak-overlay-fade` | Overlay semi-transparent |
| `ak-tilt-hover` | Rotation 3D au hover |
| `ak-grayscale-hover` | Niveaux de gris → couleur |

### Menus (`_menus.scss`)
| Classe | Effet |
|--------|-------|
| `ak-menu-underline` | Underline animé item actif/hover |
| `ak-menu-highlight` | Background highlight qui slide |
| `ak-menu-fade-in` | Sous-menu qui fade in |

### Attention (`_attention.scss`)
| Classe | Effet |
|--------|-------|
| `ak-pulse-loop` | Pulsation continue |
| `ak-bounce-loop` | Bounce continu |
| `ak-glow-loop` | Glow/halo qui pulse |
| `ak-shake` | Micro-shake (one-shot) |
| `ak-wiggle` | Rotation oscillante |

### Transitions d'entrée (`_transitions.scss`)
| Classe | Effet |
|--------|-------|
| `ak-fade-in` | Fondu d'entrée |
| `ak-slide-up` | Glissement vers le haut |
| `ak-slide-in-left` | Glissement depuis la gauche |
| `ak-slide-in-right` | Glissement depuis la droite |
| `ak-scale-in` | Apparition avec scale |

## Customisation

Chaque animation expose des CSS custom properties pour un override facile :

```css
.my-button.ak-lift-hover {
  --ak-duration: 0.5s;
  --ak-lift-y: -8px;
  --ak-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

Variables globales disponibles (`:root`) :
- `--ak-duration-fast` / `--ak-duration` / `--ak-duration-slow`
- `--ak-easing` / `--ak-easing-bounce` / `--ak-easing-smooth`
- `--ak-color-primary` / `--ak-color-accent`

## Cherry-pick un module

Importez uniquement ce dont vous avez besoin :

```scss
@use 'animkit/src/scss/variables';
@use 'animkit/src/scss/buttons';
@use 'animkit/src/scss/a11y';
```

## Accessibilité

AnimKit respecte `prefers-reduced-motion: reduce` automatiquement. Toutes les animations sont désactivées pour les utilisateurs qui préfèrent un mouvement réduit.

## Build

```bash
npm install
npm run build    # Compile + minifie
npm run watch    # Watch mode
npm run dev      # Watch + serveur local showroom
```

## Licence

MIT