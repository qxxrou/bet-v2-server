-- CreateTable
CREATE TABLE `game_type` (
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game_product` (
    `id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game` (
    `game_code` VARCHAR(191) NOT NULL,
    `game_name` VARCHAR(191) NOT NULL,
    `game_type` VARCHAR(191) NOT NULL,
    `product_id` INTEGER NOT NULL,
    `product_code` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `support_currency` VARCHAR(191) NOT NULL,
    `allow_free_round` INTEGER NOT NULL,
    `lang_name` VARCHAR(191) NOT NULL,
    `lang_icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`game_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `up_id` INTEGER NOT NULL,
    `reg_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `log_time` DATETIME(3) NOT NULL,
    `user_name` VARCHAR(64) NOT NULL,
    `password` VARCHAR(64) NOT NULL,
    `phone` VARCHAR(64) NOT NULL,
    `email` VARCHAR(64) NOT NULL,
    `real_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_id_key`(`id`),
    UNIQUE INDEX `user_user_name_key`(`user_name`),
    UNIQUE INDEX `user_phone_key`(`phone`),
    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_real_name_key`(`real_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `game` ADD CONSTRAINT `game_game_type_fkey` FOREIGN KEY (`game_type`) REFERENCES `game_type`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `game` ADD CONSTRAINT `game_product_code_fkey` FOREIGN KEY (`product_code`) REFERENCES `game_product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
